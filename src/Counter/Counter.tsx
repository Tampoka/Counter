import React, {useState} from "react";
import {Display} from "./Display/Display";
import s from "./Counter.module.scss"
import {Control} from "./Control/Control";
import DisplayWithSettings from "./DisplayWithSettings/DisplayWithSettings";

export const Counter = () => {
    const [maxValue, setMaxValue] = useState<number>(5)
    const [minValue, setMinValue] = useState<number>(0)
    const [count, setCount] = useState<number>(minValue)
    const [error, setError] = useState<boolean>(false)

    const increment = () => setCount(count + 1)
    const reset = () => setCount(minValue)

    const setMax = (max = 0) => setMaxValue(max)
    const setMin = (min = 0) => setMinValue(min)


    const disableInc = () => {
        return count === maxValue
    }

    const disableReset = () => {
        return count === minValue
    }

    return <div className={s.counterWithSettings}>
        <div className={s.counter}>
            <DisplayWithSettings setMax={setMax}
                                 setMin={setMin}
                                 maxValue={maxValue}
                                 minValue={minValue}/>
            <div className={s.controls}>
                <Control title="Set"
                         count={count}
                         action={increment}
                         setDisabled={disableInc}/>
            </div>
        </div>

        <div className={s.counter}>
            <Display count={count}
                     maxValue={maxValue}
                     error={error}
            />

            <div className={s.controls}>
                <Control title="Inc"
                         count={count}
                         action={increment}
                         setDisabled={disableInc}/>

                <Control title="Reset"
                         count={count}
                         action={reset}
                         setDisabled={disableReset}/>
            </div>
        </div>
    </div>
}