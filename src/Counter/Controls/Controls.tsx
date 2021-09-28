import React, {Dispatch, SetStateAction} from "react";

export type ControlsPropsType = {
    count: number
    setCount: Dispatch<SetStateAction<number>>
    increment: () => void
    reset: () => void
    maxValue:number
}
export const Controls = (props: ControlsPropsType) => {
    return <div>
        <button>Inc</button>
        <button>Reset</button>
    </div>
}