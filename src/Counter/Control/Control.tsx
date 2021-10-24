import React from "react";
import s from "./Control.module.css"

export type ControlPropsType = {
    title: string
    count: number
    action: () => void
    setDisabled: () => boolean
}
export const Control = (props: ControlPropsType) => {

    return <div>
        <button onClick={props.action}
                disabled={props.setDisabled()}
                className={s.control}>
            {props.title}
        </button>
    </div>
}