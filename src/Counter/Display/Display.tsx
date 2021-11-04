import React from "react";
import s from "./Display.modules.css"

export type DisplayPropsType={
    count:number
    maxValue:number
}
export const Display=(props:DisplayPropsType)=>{
    return <div className={s.display}>
        <div className={props.count===props.maxValue?s.error:""}>{props.count}</div>
    </div>
}