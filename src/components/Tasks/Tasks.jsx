import React from 'react';
import All_PTTG_Page from "../common/All_PTTG_Page.jsx";
import New_PTTG_Form from "../common/New_PTTG_Form.jsx";
import {reduxForm} from "redux-form";

const TasksForm = reduxForm({form: "tasks"})(New_PTTG_Form);

const Tasks = (props) => {
    const [popupOpened, setPopupOpened] = React.useState(false);
    const openModalWindow = () => {
        setPopupOpened(true)
    }
    const closeModalWindow = () => {
        setPopupOpened(false)
    }
    const onSubmit = (formData) => {
        props.createTask(props.userId, formData.title, formData.content, formData.datetime);
        setPopupOpened(false)
    }
    return (
        <div>
            <h1>Tasks</h1>
            {popupOpened === true && <TasksForm onSubmit={onSubmit} closePopup={closeModalWindow}/>}
            <div className="TasksPage_container">
                <All_PTTG_Page PTTG={'tasks'} array={props.tasksArr.tasks} userId={props.userId} deleteTask={props.deleteTask}/>
                <div>
                    <div className={'TasksFolder'}>
                        <button onClick={() => {
                            openModalWindow()
                        }} className={'openModalWindowBtn'}><h3>Add a new task</h3></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tasks;