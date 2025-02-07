import {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import Plans from "./Plans.jsx";
import {
    createPlanThunkCreator,
    deletePlanThunkCreator,
    getPlansThunkCreator
} from "../../redux/plans-reducer.js";
import Redirect from "../common/redirect/Redirect.jsx";

class PlansContainer extends Component {
    componentDidMount() {
        this.props.getPlans(this.props.userId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.plansArr.length !== this.props.plansArr.length) {
            this.props.getPlans(this.props.userId);
        }
    }

    render() {
        return <Plans {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.Auth.userId,
        plansArr: state.Plans
    }
}

export default compose(
    connect(mapStateToProps,
        {
            deletePlan: deletePlanThunkCreator,
            addPlan: createPlanThunkCreator,
            getPlans: getPlansThunkCreator
        }), Redirect)(PlansContainer);