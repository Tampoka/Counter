import React from "react";

export type DisplayPropsType={
    count:number
}
export const Display=(props:DisplayPropsType)=>{
    return <div>
        <div>{props.count}</div>
    </div>
}