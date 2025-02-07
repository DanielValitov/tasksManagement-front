import {Component} from "react";
import Login from "./Login.jsx";
import {compose} from "redux";
import {login} from "../../redux/auth-reducer.js";
import {connect} from "react-redux";

class LoginContainer extends Component {
    render() {
        return <Login {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.Auth.isAuth,
        userId: state.Auth.userId
    }
}

export default compose(connect(mapStateToProps, {login})(LoginContainer));