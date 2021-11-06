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
    const [saveValues, setSaveValues] = useState<boolean>(false)
    const [count, setCount] = useState<number>(counterValues.minValue)
    const [error, setError] = useState<string>('')

    const increment = () => setCount(count + 1)
    const reset = () => setCount(counterValues.minValue)

    const setMax = (value: number) => {
        setNewCounterValues({...newCounterValues, maxValue: value})
        setSaveValues(false)
        setError('enter values and press "set"')
    }
    const setMin = (value: number) => {
        setNewCounterValues({...newCounterValues, minValue: value})
        setSaveValues(false)
        setError('enter values and press "set"')
    }

    const setValues = () => {
        localStorage.setItem("counterValues", JSON.stringify(newCounterValues))
        setCounterValues(newCounterValues)
        setCount(newCounterValues.minValue)
        setError('')
        setSaveValues(true)
    }

    useEffect(() => {
        let valueAsString = localStorage.getItem("counterValues")
        if (valueAsString) {
            let newValues = JSON.parse(valueAsString)
            console.log(newValues)
            setNewCounterValues(newValues)
            setCount(newValues.minValue)
        }
    }, [])

    useEffect(() => {
        if (newCounterValues.maxValue <= newCounterValues.minValue || newCounterValues.minValue < 0) {
            setError('Incorrect value!')
            setSaveValues(true)
        }
    }, [newCounterValues])

    const disableInc = () => {
        return count === counterValues.maxValue
    }

    const disableReset = () => {
        return count === counterValues.minValue
    }

    const disableSet = () => saveValues

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