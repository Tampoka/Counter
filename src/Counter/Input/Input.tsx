import React, {ChangeEvent} from 'react';
import s from './Input.module.scss'

type InputPropsType={
    label:string
    onChange:(value:number)=>void
    value:number
}
const Input = (props:InputPropsType) => {
    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>props.onChange(Number(e.currentTarget.value))

    return (
        <div className={s.setting}>
            <span>{props.label}</span>
            <input type="number"
            onChange={onChangeHandler}
            value={props.value}/>

        </div>
    );
};

export default Input;