import React from 'react';
import s from './Input.module.scss'

export type InputPropsType={
    label:string
}
const Input = ({label}:InputPropsType) => {
    return (
        <div className={s.setting}>
            <span>{label}</span>
            <input type="number"/>
        </div>
    );
};

export default Input;