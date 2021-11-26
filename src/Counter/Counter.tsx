import React, {useEffect, useState} from "react";
import {Display} from "./Display/Display";
import s from "./Counter.module.scss"
import {Control} from "./Control/Control";
import DisplayWithSettings from "./DisplayWithSettings/DisplayWithSettings";

export type CounterValuesType = {
    maxValue: number
    minValue: number
}
export const Counter = () => {
    const [counterValues, setCounterValues] = useState<CounterValuesType>({
        maxValue: 5,
        minValue: 0
    })
    const [newCounterValues, setNewCounterValues] = useState<CounterValuesType>({
        maxValue: 5,
        minValue: 0
    })
    const [isSaved, setIsSaved] = useState<boolean>(false)
    const [count, setCount] = useState<number>(counterValues.minValue)
    const [error, setError] = useState<string>('')

    const increment = () => setCount(count + 1)
    const reset = () => setCount(counterValues.minValue)

    const setMax = (value: number) => {
        setNewCounterValues({...newCounterValues, maxValue: value})
        if (isSaved) setIsSaved(false)
        setError('enter values and press "set"')
    }
    const setMin = (value: number) => {
        setNewCounterValues({...newCounterValues, minValue: value})
        if (isSaved) setIsSaved(false)
        setError('enter values and press "set"')
    }

    const setValues = () => {
        localStorage.setItem("counterValues", JSON.stringify(newCounterValues))
        setCounterValues(newCounterValues)
        setCount(newCounterValues.minValue)
        setError('')
        setIsSaved(true)
    }

    useEffect(() => {
        let valueAsString = localStorage.getItem("counterValues")
        if (valueAsString) {
            let newValues = JSON.parse(valueAsString)
            console.log(newValues)
            setCounterValues(newValues)
            setNewCounterValues(newValues)
            setCount(newValues.minValue)
        }
    }, [])

    useEffect(() => {
        if (newCounterValues.maxValue <= newCounterValues.minValue || newCounterValues.minValue < 0) {
            setError('Incorrect value!')
            setIsSaved(true)
        }
    }, [newCounterValues])

    const disableInc = () => count === counterValues.maxValue || !!error

    const disableReset = () => count === counterValues.minValue || !!error

    const disableSet = () => isSaved

    return <div className={s.counterWithSettings}>
        <div className={s.counter}>
            <DisplayWithSettings setMax={setMax}
                                 setMin={setMin}
                                 maxValue={newCounterValues.maxValue}
                                 minValue={newCounterValues.minValue}/>
            <div className={s.controls}>
                <Control title="Set"
                         count={count}
                         action={setValues}
                         setDisabled={disableSet}/>
            </div>
        </div>

        <div className={s.counter}>
            <Display count={count}
                     maxValue={counterValues.maxValue}
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