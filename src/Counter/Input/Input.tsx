import React from 'react';
import s from './Input.module.scss'

const Input = () => {
    return (
        <div className={s.setting}>
            <span>max value:</span>
            <input type="number"/>
        </div>
    );
};

export default Input;