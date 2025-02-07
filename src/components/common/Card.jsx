import React from 'react';

const Card = (props) => {
    debugger
    const deleteTask = (userId, id) => {
        debugger
        props.deleteTask(userId, id);
    }
    debugger
    return (
        <div className={'PTTG_card'}>
            <div>
                <h4 className={'PTTG_card_text'}>{props.title}</h4>
                <p className={'PTTG_card_maininfo'}>
                    {props.content}
                </p>
                <p className={'PTTG_card_maininfo'}>{props.date}</p>
            </div>

            <button onClick={() => deleteTask(props.userId, props.id)} className={'deleteBtn'}><img src="https://cdn-icons-png.flaticon.com/128/1345/1345823.png" alt="Delete icon"/></button>
        </div>
    );
};

export default Card;