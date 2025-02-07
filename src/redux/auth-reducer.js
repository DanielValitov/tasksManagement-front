import {callApi} from "../api/api.js";
import {addGoal, getGoalsThunkCreator} from "./goals-reducer.js";
import {getTasksThunkCreator} from "./tasks-reducer.js";
import {getPlansThunkCreator} from "./plans-reducer.js";

const SET_IS_AUTH = "SET_IS_AUTH";
const SET_AUTH_DATA = "SET_AUTH_DATA";
const SET_IS_FETCHING = "SET_USER_DATA_READY";

const setIsAuth = (isAuth) => ({type: SET_IS_AUTH, isAuth});
const setAuthData = (userId, username, password, tasks, plans, goals) => ({
    type: SET_AUTH_DATA,
    userId,
    username,
    password,
    tasks,
    plans,
    goals
});
const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching})

const initialState = {
    isFetching: false,
    isAuth: false,
    userId: null,
    username: null,
    password: null,
    tasks: [],
    plans: [],
    goals: [],
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
        case SET_IS_AUTH: {
            return {
                ...state,
                isAuth: action.isAuth
            }
        }
        case SET_AUTH_DATA: {
            debugger
            return {
                ...state,
                userId: action.userId,
                username: action.username,
                password: action.password,
                tasks: action.tasks,
                plans: action.plans,
                goals: action.goals,
            }
        }
        case SET_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
    }
}

export const signUp = (username, password) => async (dispatch) => {
    dispatch(setIsFetching(true))
    const res = await callApi.signupProfile(username, password)
    if(res.status === 200) {
        dispatch(setIsAuth(true));
        dispatch(setAuthData(res.user._id, res.user.username, res.user.password, res.user.tasks, res.user.plans, res.user.goals));
    } else {
        alert('Something went wrong...')
    }
    dispatch(setIsFetching(false))
}
export const login = (username, password) => async (dispatch) => {
    const res = await callApi.loginProfile(username, password);
    if(res.success === true) {
        dispatch(setIsFetching(true))
            dispatch(setIsAuth(true));
            dispatch(setAuthData(res.user._id, res.user.username, res.user.password, res.user.tasks, res.user.plans, res.user.goals))
            dispatch(setIsFetching(false))
    } else {
        alert(res.message)
    }
}

export const getAllTasksPlansGoals = (userId) => (dispatch) => {
    dispatch(setIsFetching(true))
    dispatch(getTasksThunkCreator(userId))
    dispatch(getPlansThunkCreator(userId))
    dispatch(getGoalsThunkCreator(userId))
    dispatch(setIsFetching(false))
}

export default AuthReducer;