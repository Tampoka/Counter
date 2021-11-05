import React from 'react';
import s from './DisplayWithSettings.module.scss'

import Input from "../Input/Input";

const DisplayWithSettings = () => {
    return (
        <div className={s.display}>
            <Input/>
            <Input/>
        </div>
    );
};

export default DisplayWithSettings;