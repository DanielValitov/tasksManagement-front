import {Component} from "react";
import Signup from "./Signup.jsx";
import {compose} from "redux";
import {connect} from "react-redux";
import {signUp} from "../../redux/auth-reducer.js";

class SignupContainer extends Component {
    render() {
        return <Signup {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.Auth.isAuth,
        userId: state.Auth.userId
    }
}

export default compose(connect(mapStateToProps, {signUp}))(SignupContainer);