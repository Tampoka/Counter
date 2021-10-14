import React from "react";
import s from "./Display.module.css"

export type DisplayPropsType={
    count:number
    maxValue:number
}
export const Display=(props:DisplayPropsType)=>{
    return <div>
        <div className={props.count===props.maxValue?s.error:""}>{props.count}</div>
    </div>
}