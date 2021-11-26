import React, {Dispatch, useEffect, useState} from "react";
import {Display} from "./Display/Display";
import s from "./Counter.module.scss"
import {Control} from "./Control/Control";
import DisplayWithSettings from "./DisplayWithSettings/DisplayWithSettings";
import {useDispatch} from "react-redux";

export type CounterValuesType = {
    maxValue: number
    minValue: number
    currentValue:number
}

export type NewCounterValuesType = {
    maxValue: number
    minValue: number
}
export const Counter = () => {

    const dispatch: Dispatch<any> = useDispatch()

    const [counterValues, setCounterValues] = useState<CounterValuesType>({
        maxValue: 5,
        minValue: 0,
        currentValue:0
    })
    const [newCounterValues, setNewCounterValues] = useState<NewCounterValuesType>({
        maxValue: 5,
        minValue: 0
    })
    const [isSaved, setIsSaved] = useState<boolean>(false)
    // const [count, setCount] = useState<number>(counterValues.minValue)
    const [error, setError] = useState<string>('')

    const increment = () => setCounterValues({...counterValues,currentValue:counterValues.currentValue+1})
    const reset = () => setCounterValues({...counterValues,currentValue:counterValues.minValue})

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
        setCounterValues({...counterValues,maxValue:newCounterValues.maxValue,
        minValue:newCounterValues.minValue,currentValue:newCounterValues.minValue})
        setError('')
        setIsSaved(true)
    }

    useEffect(() => {
        let valueAsString = localStorage.getItem("counterValues")
        if (valueAsString) {
            let newValues = JSON.parse(valueAsString)
            console.log(newValues)
            setCounterValues({...counterValues,maxValue:newValues.maxValue,minValue:newValues.minValue,currentValue:newValues.minValue})
            setNewCounterValues(newValues)
        }
    }, [])

    useEffect(() => {
        if (newCounterValues.maxValue <= newCounterValues.minValue || newCounterValues.minValue < 0) {
            setError('Incorrect value!')
            setIsSaved(true)
        }
    }, [newCounterValues])

    const disableInc = () => counterValues.currentValue === counterValues.maxValue || !!error

    const disableReset = () => counterValues.currentValue === counterValues.minValue || !!error

    const disableSet = () => isSaved

    return <div className={s.counterWithSettings}>
        <div className={s.counter}>
            <DisplayWithSettings setMax={setMax}
                                 setMin={setMin}
                                 maxValue={newCounterValues.maxValue}
                                 minValue={newCounterValues.minValue}/>
            <div className={s.controls}>
                <Control title="Set"
                         count={counterValues.currentValue}
                         action={setValues}
                         setDisabled={disableSet}/>
            </div>
        </div>

        <div className={s.counter}>
            <Display count={counterValues.currentValue}
                     maxValue={counterValues.maxValue}
                     error={error}
            />

            <div className={s.controls}>
                <Control title="Inc"
                         count={counterValues.currentValue}
                         action={increment}
                         setDisabled={disableInc}/>

                <Control title="Reset"
                         count={counterValues.currentValue}
                         action={reset}
                         setDisabled={disableReset}/>
            </div>
        </div>
    </div>
}