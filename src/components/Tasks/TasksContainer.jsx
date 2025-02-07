import {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import Tasks from "./Tasks.jsx";
import {
    addTask,
    createTaskThunkCreator,
    deleteTaskThunkCreator,
    getTasksThunkCreator
} from "../../redux/tasks-reducer.js";
import Redirect from "../common/redirect/Redirect.jsx";

class TasksContainer extends Component {
    componentDidMount() {
        this.props.getTasks(this.props.userId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.tasksArr.length !== this.props.tasksArr.length) {
            this.props.getTasks();
        }
    }

    render() {
        return <Tasks {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        tasksArr: state.Tasks,
        userId: state.Auth.userId
    }
}

export default compose(connect(mapStateToProps,
    {
        deleteTask: deleteTaskThunkCreator,
        addTask,
        getTasks: getTasksThunkCreator,
        createTask: createTaskThunkCreator
    }), Redirect)(TasksContainer);