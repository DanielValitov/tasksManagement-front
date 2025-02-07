// import {callApi} from "../api/api.js";
// import {setTasks} from "./tasks-reducer.js";
//
// const DELETE_PLAN = "DELETE_PLAN";
// const ADD_PLAN = "ADD_PLAN";
// const SET_PLANS = "SET_PLANS";
//
// export const deletePlan = (id) => ({type: DELETE_PLAN, id});
// export const addPlan = (title, content, date) => ({type: ADD_PLAN, data: {title, content, date}});
// export const setPlans = (plans) => ({type: SET_PLANS, plans});
//
//
// const initialState = {
//     plans: []
// }
//
// const PlansReducer = (state = initialState, action) => {
//     switch (action.type) {
//         default: {
//             return state;
//         }
//         case SET_PLANS: {
//             return {
//                 ...state,
//                 plans: [...state.plans, ...action.plans],
//             }
//         }
//         case DELETE_PLAN: {
//             return {
//                 ...state,
//                 plans: state.plans.filter((plan) => plan.id !== action.id),
//             }
//         }
//         case ADD_PLAN: {
//             return {
//                 ...state,
//                 plans: [...state.plans, {id: state.plans.length + 1, ...action.data}],
//             }
//         }
//     }
// }
//
// export const getPlansThunkCreator = () => async (dispatch) => {
//     const plans = await callApi.getPlans();
//     dispatch(setPlans(plans.data.map(plan => ({id: plan._id ,title: plan.title, content: plan.content, date: plan.date}))))
// }
//
// export const createPlanThunkCreator = (title, content, date) => async (dispatch) => {
//     const response = await callApi.postPlan(title, content, date);
//     if(response.status === 200) {
//         dispatch(addPlan(title, content, date));
//     } else {
//         alert('Something went wrong!');
//     }
// }
//
// export const deletePlanThunkCreator = (id) => async (dispatch) => {
//     const response = await callApi.deletePlan(id);
//     if(response.status === 200) {
//         dispatch(deletePlan(id));
//     }
// }
//
// export default PlansReducer

import {callApi} from "../api/api.js";

const SET_PLANS = "SET_PLANS";
const DELETE_PLAN = "DELETE_PLAN";
const ADD_PLAN = "ADD_PLAN";

export const deletePlan = (id) => ({type: DELETE_PLAN, id});
export const addPlan = (id, title, content, date) => ({type: ADD_PLAN, data: {id, title, content, date}});
export const setPlans = (plans) => ({type: SET_PLANS, plans});

const initialState = {
    plans: []
}

const PlansReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
        case SET_PLANS: {
            return {
                ...state,
                plans: [...action.plans],
            }
        }
        case DELETE_PLAN: {
            return {
                ...state,
                plans: state.plans.filter((plan) => plan.id !== action.id),
            }
        }
        case ADD_PLAN: {
            debugger
            return {
                ...state,
                plans: [...state.plans, {...action.data}],
            }
        }
    }
}

export const getPlansThunkCreator = (userId) => async (dispatch) => {
    const plans = await callApi.getPlans(userId);
    dispatch(setPlans(plans.data.map(plan => ({id: plan._id ,title: plan.title, content: plan.content, date: plan.date})),))
}

export const createPlanThunkCreator = (userId, title, content, date) => async (dispatch) => {
    const response = await callApi.postPlan(userId, title, content, date);
    if(response.status === 200) {
        dispatch(addPlan(title, content, date));
        dispatch(getPlansThunkCreator(userId))
    } else {
        alert('Something went wrong!');
    }
}

export const deletePlanThunkCreator = (userId, id) => async (dispatch) => {
    const response = await callApi.deletePlan(userId, id);
    if(response.status === 200) {
        dispatch(deletePlan(id));
    }
}

export default PlansReducer;