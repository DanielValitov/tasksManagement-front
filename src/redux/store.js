import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import {thunk} from "redux-thunk";
import GoalsReducer from "./goals-reducer.js";
import PlansReducer from "./plans-reducer.js";
import TasksReducer from "./tasks-reducer.js";
import AuthReducer from "./auth-reducer.js";
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers(
    {
        Goals: GoalsReducer,
        Tasks: TasksReducer,
        Plans: PlansReducer,
        Auth: AuthReducer,
        form: formReducer
    }
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)
));
// let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;