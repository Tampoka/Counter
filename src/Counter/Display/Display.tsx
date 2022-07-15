import React from "react";
import s from "./Display.module.scss"

export type DisplayPropsType = {
    count: number
    maxValue: number
    minValue: number
    error: string
}
export const Display = (props: DisplayPropsType) => {
    return <div className={s.display}>
        {props.error
            ? <div className={s.errorMessage}>{props.error}</div>
            : <div className={props.count === props.maxValue||props.count===props.minValue ? s.error : ""}>{props.count}</div>
        }
    </div>
}