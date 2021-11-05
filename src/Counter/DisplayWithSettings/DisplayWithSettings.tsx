import React from 'react';
import s from './DisplayWithSettings.module.scss'

import Input from "../Input/Input";

const DisplayWithSettings = () => {
    return (
        <div className={s.display}>
            <Input label="max value:"/>
            <Input label="min value:"/>
        </div>
    );
};

export default DisplayWithSettings;