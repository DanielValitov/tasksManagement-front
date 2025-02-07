import React from 'react';

const SetCustomArea = ({input, meta, ...props}) => {
    const errorState = meta.touched && meta.error;
    return (
        <div className={"inputTextWrapper" + " " + (errorState ? "inputError" : "")}>
            {props.children}
            <div className={"errorMessageContainer"}>{errorState && <span>{meta.error}</span>}</div>
        </div>
    );
};

export const CustomTxtarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <SetCustomArea {...props}>
        <textarea className={'textarea'} {...input} {...restProps} />
    </SetCustomArea>
};

export const CustomInput = (props) => {
    const {input, meta, ...restProps} = props;
    return <SetCustomArea {...props}>
        <input className={'input'} {...input} {...restProps} />
    </SetCustomArea>
};
