import React, {Dispatch, SetStateAction} from "react";

export type ControlsPropsType = {
    count: number
    setCount: Dispatch<SetStateAction<number>>
    increment: () => void
    reset: () => void
    maxValue:number
    minValue:number
}
export const Controls = (props: ControlsPropsType) => {
    return <div>
        <button onClick={props.increment} disabled={props.count===props.maxValue}>Inc</button>
        <button onClick={props.reset} disabled={props.count===props.minValue}>Reset</button>
    </div>
}