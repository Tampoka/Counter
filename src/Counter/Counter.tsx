import React, {useState} from "react";
import {Controls} from "./Controls/Controls";
import {Display} from "./Display/Display";

export const Counter=()=>{
    let [count,setCount]=useState<number>(0)

    const increment=()=>{
        setCount(count+1)
    }
    const reset=()=>{
        setCount(0)
    }
    const maxValue:number=5

    return <div>
        <Display/>
        <Controls/>
    </div>
}