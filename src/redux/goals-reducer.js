// import {callApi} from "../api/api.js";
// import {addPlan, deletePlan, setPlans} from "./plans-reducer.js";
//
// const DELETE_GOAL = "DELETE_GOAL";
// const ADD_GOAL = "ADD_GOAL";
// const SET_GOALS = "SET_GOALS";
//
// export const deleteGoal = (id) => ({type: DELETE_GOAL, id});
// export const addGoal = (title, content, date) => ({type: ADD_GOAL, data: {title, content, date}});
// export const setGoals = (goals) => ({type: SET_GOALS, goals});
//
// const initialState = {
//     goals: []
// }
//
// const GoalsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         default: {
//             return state;
//         }
//         case SET_GOALS: {
//             return {
//                 ...state,
//                 goals: [...state.goals, ...action.goals],
//             }
//         }
//         case DELETE_GOAL: {
//             return {
//                 ...state,
//                 goals: state.goals.filter((goal) => goal.id !== action.id),
//             }
//         }
//         case ADD_GOAL: {
//             debugger
//             return {
//                 ...state,
//                 goals: [...state.goals, {id: state.goals.length + 1, ...action.data}],
//             }
//         }
//     }
// }
//
// export const getGoalsThunkCreator = () => async (dispatch) => {
//     const goals = await callApi.getGoals();
//     dispatch(setGoals(goals.data.map(goal => ({id: goal._id ,title: goal.title, content: goal.content, date: goal.date})),))
// }
//
// export const createGoalThunkCreator = (title, content, date) => async (dispatch) => {
//     const response = await callApi.postGoal(title, content, date);
//     if(response.status === 200) {
//         dispatch(addGoal(title, content, date));
//     } else {
//         alert('Something went wrong!');
//     }
// }
//
// export const deleteGoalThunkCreator = (id) => async (dispatch) => {
//     const response = await callApi.deleteGoal(id);
//     if(response.status === 200) {
//         dispatch(deleteGoal(id));
//     }
// }
//
//
// export default GoalsReducer;

import {callApi} from "../api/api.js";

const SET_GOALS = "SET_GOALS";
const DELETE_GOAL = "DELETE_GOAL";
const ADD_GOAL = "ADD_GOAL";

export const deleteGoal = (id) => ({type: DELETE_GOAL, id});
export const addGoal = (id, title, content, date) => ({type: ADD_GOAL, data: {id, title, content, date}});
export const setGoals = (goals) => ({type: SET_GOALS, goals});

const initialState = {
    goals: []
}

const GoalsReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
        case SET_GOALS: {
            return {
                ...state,
                goals: [...action.goals],
            }
        }
        case DELETE_GOAL: {
            return {
                ...state,
                goals: state.goals.filter((goal) => goal.id !== action.id),
            }
        }
        case ADD_GOAL: {
            debugger
            return {
                ...state,
                goals: [...state.goals, {...action.data}],
            }
        }
    }
}

export const getGoalsThunkCreator = (userId) => async (dispatch) => {
    const goals = await callApi.getGoals(userId);
    dispatch(setGoals(goals.data.map(goal => ({id: goal._id ,title: goal.title, content: goal.content, date: goal.date})),))
}

export const createGoalThunkCreator = (userId, title, content, date) => async (dispatch) => {
    const response = await callApi.postGoal(userId, title, content, date);
    if(response.status === 200) {
        dispatch(addGoal(title, content, date));
        dispatch(getGoalsThunkCreator(userId))
    } else {
        alert('Something went wrong!');
    }
}

export const deleteGoalThunkCreator = (userId, id) => async (dispatch) => {
    const response = await callApi.deleteGoal(userId, id);
    if(response.status === 200) {
        dispatch(deleteGoal(id));
    }
}

export default GoalsReducer;