import React from 'react';
import All_PTTG_Page from "../common/All_PTTG_Page.jsx";
import New_PTTG_Form from "../common/New_PTTG_Form.jsx";
import {reduxForm} from "redux-form";

const PlansForm = reduxForm({form: 'plans'})(New_PTTG_Form);

const Plans = (props) => {
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
        props.addPlan(props.userId, formData.title, formData.content, formData.datetime);
        setPopupOpened(false)
    }
    return (
        <div>
            <h1>Plans</h1>
            {popupOpened === true && <PlansForm onSubmit={onSubmit} closePopup={closeModalWindow}/>}
            <div className="TasksPage_container">
                <All_PTTG_Page PTTG={'plans'} array={props.plansArr.plans} userId={props.userId} deleteTask={props.deletePlan}/>
                <div>
                    <div className={'TasksFolder'}>
                        <button onClick={() => {
                            openModalWindow()
                        }} className={'openModalWindowBtn'}><h3>Add a new plan</h3></button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Plans;