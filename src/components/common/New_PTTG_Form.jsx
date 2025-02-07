import React from 'react';
import {Field} from "redux-form";

const New_PTTG_Form = (props) => {
    return (<div className={'modalWindow'}>
        <div className={'modal-content'}>
            <form onSubmit={props.handleSubmit} className={'new-task-form'}>
                <h3>Add a new task</h3>
                <Field name={'title'} component={'input'} type="text" placeholder="Task text..."/>
                <Field name={'content'} component={'textarea'} placeholder="Description..."/>
                <Field name={'datetime'} component={'input'} type={'datetime-local'}/>
                <button>Add</button>
            </form>
            <button className={'closePopupBtn'} onClick={() => {props.closePopup()}}><img src="https://cdn-icons-png.flaticon.com/128/10308/10308565.png" alt=""/>
            </button>
        </div>
    </div>);
};

export default New_PTTG_Form;