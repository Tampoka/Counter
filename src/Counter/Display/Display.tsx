import React from "react";

export type DisplayPropsType={
    count:number
    maxValue:number
}
export const Display=(props:DisplayPropsType)=>{
    return <div>
        <div className={props.count===props.maxValue?"display":"maxValue"}>{props.count}</div>
    </div>
}