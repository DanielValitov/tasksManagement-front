import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Navigate, NavLink} from "react-router-dom";
import {CustomInput} from "../common/fieldsCustomComponents/SetCustomArea.jsx";

const SignupForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field name={'username'} component={CustomInput} type="text" placeholder="Profile name..."/>
                <Field name={'password'} component={CustomInput} type="text" placeholder="Password..."/>
                <button className={'accountSubmitFormBtn'}>Log in</button>
            </form>
            <div className={'signupLoginLink'}>Already have an account? <NavLink to={'/login'}>Log in</NavLink></div>
        </div>
    );
};

const SignupReduxForm = reduxForm({form: 'signup'})(SignupForm);

const Signup = (props) => {
    const onSubmit = (formData) => {
        props.signUp(formData.username, formData.password, props.userId);
    }
    return (
        <>
            <h1>Signup</h1>
            <div><SignupReduxForm onSubmit={onSubmit} /></div>
            {props.isAuth === true && <Navigate to="/" />}
        </>
    )
}

export default Signup;