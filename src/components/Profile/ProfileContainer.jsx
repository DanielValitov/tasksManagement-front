import {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import Profile from "./Profile.jsx";
import Redirect from "../common/redirect/Redirect.jsx";

class ProfileContainer extends Component {
    render() {
        return <Profile {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        goalsLength: state.Goals.goals.length,
        tasksLength: state.Tasks.tasks.length,
        plansLength: state.Plans.plans.length,
    }
}

export default compose(connect(mapStateToProps), Redirect)(ProfileContainer);