import React from 'react';
import Card from "./Card.jsx";

const All_PTTG_Page = (props) => {
    return (
        <div>
            <div className={'PTTG_cards_container'}>
                {props.array.length !== 0 ? <div>{props.array.map(task => (
                        <div key={task.id}><Card title={task.title} content={task.content} date={task.date} deleteTask={props.deleteTask} id={task.id} userId={props.userId}/></div>
                    ))
                }</div> : <>No {props.PTTG} at the moment</>}

            </div>
        </div>
    );
};

export default All_PTTG_Page;