import React, {Dispatch, SetStateAction} from "react";

export type ControlsPropsType = {
    count: number
    setCount: Dispatch<SetStateAction<number>>
    increment: () => void
    reset: () => void
}
export const Controls = (props: ControlsPropsType) => {
    return <div>
        <button onClick={}>Inc</button>
        <button>Reset</button>
    </div>
}