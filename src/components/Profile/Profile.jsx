import React from 'react';
import {NavLink} from "react-router-dom";

const Profile = (props) => {
    return (
        <div className="ProfilePage">
            <h1>Profile</h1>
            <div>
                <div><img className={'profile_img'}
                          src="data:image/jpeg;base64,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"
                          alt=""/></div>
                <div className="profileDataBlock profile_nameBlock">
                    <p><b>Profile name:</b> profile_name123</p>
                    <button>Change...</button>
                </div>
                <div className={"profileDataBlock profile_imgBlock"}>
                    <p><b>Profile image:</b></p>
                    <button>Change profile image...</button>
                </div>
            </div>

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

export default Profile;