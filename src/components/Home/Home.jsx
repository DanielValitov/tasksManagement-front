import React from 'react';
import {NavLink} from "react-router-dom";

const Home = (props) => {
    debugger
    return (
        <div>
            <h1>Home</h1>
            <div className="preview-block-container">
                <NavLink className={'navlink'} to={'/texts'}>
                    <div className="preview-block">
                        <div className="preview">
                            <div><h3>Texts</h3></div>
                        </div>
                    </div>
                </NavLink>
                <NavLink className={'navlink'} to={'/tasks'}>
                    <div className="preview-block">
                        <div className="preview">
                            <div><h3>Tasks</h3></div>
                            <div><h3>{props.tasksLength}</h3></div>
                        </div>
                    </div>
                </NavLink>
                <NavLink className={'navlink'} to={'goals'}>
                    <div className="preview-block">
                        <div className="preview">
                            <div><h3>Goals</h3></div>
                            <div><h3>{props.goalsLength}</h3></div>
                        </div>
                    </div>
                </NavLink>
                <NavLink className={'navlink'} to={'plans'}>
                    <div className="preview-block">
                        <div className="preview">
                            <div><h3>Plans</h3></div>
                            <div><h3>{props.plansLength}</h3></div>
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default Home;