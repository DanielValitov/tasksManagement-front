import React from 'react';
import All_PTTG_Page from "../common/All_PTTG_Page.jsx";
import New_PTTG_Form from "../common/New_PTTG_Form.jsx";
import {reduxForm} from "redux-form";

const GoalsForm = reduxForm({form: 'goals'})(New_PTTG_Form);

const Goals = (props) => {
    debugger
    const [popupOpened, setPopupOpened] = React.useState(false);
    debugger
    const openModalWindow = () => {
        setPopupOpened(true)
    }
    const closeModalWindow = () => {
        setPopupOpened(false)
    }
    const onSubmit = (formData) => {
        debugger
        props.addGoal(props.userId, formData.title, formData.content, formData.datetime);
        setPopupOpened(false)
    }
    return (
        <div>
            <h1>Goals</h1>
            {popupOpened === true && <GoalsForm onSubmit={onSubmit} closePopup={closeModalWindow}/>}
            <div className="TasksPage_container">
                <All_PTTG_Page PTTG={'goals'} array={props.goalsArr.goals} userId={props.userId} deleteTask={props.deleteGoal}/>
                <div>
                    <div className={'TasksFolder'}>
                        <button onClick={() => {
                            openModalWindow()
                        }} className={'openModalWindowBtn'}><h3>Add a new goal</h3></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Goals;