import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Navigate, NavLink} from "react-router-dom";
import {CustomInput} from "../common/fieldsCustomComponents/SetCustomArea.jsx";

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field name={'username'} component={CustomInput} type="text" placeholder="Profile name..."/>
                <Field name={'password'} component={CustomInput} type="text" placeholder="Password..."/>
                <button className={'accountSubmitFormBtn'}>Log in</button>
            </form>
            <div className={'signupLoginLink'}>Don't have an account yet? <NavLink to={'/signup'}>Sign up</NavLink></div>
        </div>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        debugger
        props.login(formData.username, formData.password, props.userId)
    }
    return (
        <>
            <h1>Login</h1>
            <div><LoginReduxForm onSubmit={onSubmit} /></div>
            {props.isAuth === true && <Navigate to="/" />}
        </>
    )
}

export default Login;