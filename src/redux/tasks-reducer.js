import {callApi} from "../api/api.js";
import tasks from "../components/Tasks/Tasks.jsx";

const SET_TASKS = "SET_TASKS";
const DELETE_TASK = "DELETE_TASK";
const ADD_TASK = "ADD_TASK";

export const deleteTask = (id) => ({type: DELETE_TASK, id});
export const addTask = (id, title, content, date) => ({type: ADD_TASK, data: {id, title, content, date}});
export const setTasks = (tasks) => ({type: SET_TASKS, tasks});

const initialState = {
    tasks: []
}

const TasksReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
        case SET_TASKS: {
            return {
                ...state,
                tasks: [...action.tasks],
            }
        }
        case DELETE_TASK: {
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.id),
            }
        }
        case ADD_TASK: {
            debugger
            return {
                ...state,
                tasks: [...state.tasks, {...action.data}],
            }
        }
    }
}

export const getTasksThunkCreator = (userId) => async (dispatch) => {
    const tasks = await callApi.getTasks(userId);
    dispatch(setTasks(tasks.data.map(task => ({id: task._id ,title: task.title, content: task.content, date: task.date})),))
}

export const createTaskThunkCreator = (userId, title, content, date) => async (dispatch) => {
    const response = await callApi.postTask(userId, title, content, date);
    if(response.status === 200) {
        dispatch(addTask(title, content, date));
        dispatch(getTasksThunkCreator(userId))
    } else {
        alert('Something went wrong!');
    }
}

export const deleteTaskThunkCreator = (userId, id) => async (dispatch) => {
    const response = await callApi.deleteTask(userId, id);
    if(response.status === 200) {
        dispatch(deleteTask(id));
    }
}

export default TasksReducer;