import React from 'react';
import s from './DisplayWithSettings.module.scss'
import Input from "../Input/Input";
import {useSelector} from "react-redux";
import {SettingStateType} from "../../Redux/counterSetting-reducer";
import {AppStateType} from "../../Redux/store";

type DisplayWithSettingsPropsType = {
    setMax: (value: number) => void
    setMin: (value: number) => void
}
const DisplayWithSettings = (props: DisplayWithSettingsPropsType) => {
    console.log("DisplayWithSettings renders")

    const {newMaxValue, newMinValue} = useSelector<AppStateType, SettingStateType>(state => state.counterSettingReducer)

    const onChangeMaxHandler = (value: number) => {
        props.setMax(value)
    }
    const onChangeMinHandler = (value: number) => {
        props.setMin(value)
    }

    return (
        <div className={s.display}>
            <Input label="max value:"
                   onChange={onChangeMaxHandler}
                   value={newMaxValue}
            />
            <Input label="min value:"
                   onChange={onChangeMinHandler}
            value={newMinValue}/>
        </div>
    );
};

export default DisplayWithSettings;