import React, {useState} from "react";
import {Display} from "./Display/Display";
import s from "./Counter.module.css"
import {Control} from "./Control/Control";

export const Counter = () => {
    const maxValue: number = 5
    const minValue: number = 0
    const [count, setCount] = useState<number>(minValue)

    const increment = () => setCount(count + 1)

    const reset = () => setCount(minValue)

    const disableInc = () => {
        return count === maxValue
    }

    const disableReset = () => {
        return count === minValue
    }

    return <div className={s.counter}>
        <Display count={count}
                 maxValue={maxValue}/>

        <div className={s.controls}><Control title="Inc"
                      count={count}
                      action={increment}
                      setDisabled={disableInc}/>

            <Control title="Reset"
                     count={count}
                     action={reset}
                     setDisabled={disableReset}/></div>
    </div>
}