import {Component} from "react";
import Goals from "./Goals.jsx";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    addGoal,
    createGoalThunkCreator,
    deleteGoal,
    deleteGoalThunkCreator,
    getGoalsThunkCreator
} from "../../redux/goals-reducer.js";
import Redirect from "../common/redirect/Redirect.jsx";

class GoalsContainer extends Component {
    componentDidMount() {
        this.props.getGoals(this.props.userId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.goalsArr.length !== this.props.goalsArr.length) {
            this.props.getGoals(this.props.userId);
        }
    }

    render() {
        return <Goals {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.Auth.userId,
        goalsArr: state.Goals
    }
}

export default compose(connect(mapStateToProps,
    {
        deleteGoal: deleteGoalThunkCreator,
        addGoal: createGoalThunkCreator,
        getGoals: getGoalsThunkCreator
    }), Redirect)(GoalsContainer);