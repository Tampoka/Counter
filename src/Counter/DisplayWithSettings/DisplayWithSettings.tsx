import React from 'react';
import s from './DisplayWithSettings.module.scss'

import Input from "../Input/Input";

type DisplayWithSettingsPropsType = {
    setMax: (max: number) => void
    setMin: (min: number) => void
    maxValue: number
    minValue: number
}
const DisplayWithSettings = (props: DisplayWithSettingsPropsType) => {
    return (
        <div className={s.display}>
            <Input label="max value:"
                   onChange={props.setMax}
                   value={props.maxValue}
            />
            <Input label="min value:"
                   onChange={props.setMin}
                   value={props.minValue}/>
        </div>
    );
};

export default DisplayWithSettings;