import Home from "./Home.jsx";
import { compose } from "redux";
import { connect } from "react-redux";
import React from "react";
import Preloader from "../common/preloader/Preloader.jsx";
import Redirect from "../common/redirect/Redirect.jsx";
import {getAllTasksPlansGoals} from "../../redux/auth-reducer.js";

class HomeContainer extends React.Component {
    componentDidMount() {
        this.props.getAllTasksPlansGoals(this.props.userId);
    }

    render() {
            return <>{this.props.isFetching ? <Preloader/> : <Home {...this.props} />}</>;
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth,
    userId: state.Auth.userId,
    isFetching: state.Auth.isFetching,
    goalsLength: state.Goals.goals.length,
    tasksLength: state.Tasks.tasks.length,
    plansLength: state.Plans.plans.length,
    username: state.Auth.username,
    password: state.Auth.password,
});

export default compose(connect(mapStateToProps, {getAllTasksPlansGoals}), Redirect)(HomeContainer);
