import React, {Dispatch, useEffect, useState} from "react";
import {Display} from "./Display/Display";
import s from "./Counter.module.scss"
import {Control} from "./Control/Control";
import DisplayWithSettings from "./DisplayWithSettings/DisplayWithSettings";
import {useDispatch, useSelector} from "react-redux";
import {CounterStateType, setCounterValuesAC, setCurrentValueAC} from "../Redux/counter-reducer";
import {AppStateType} from "../Redux/store";
import {setNewMaxValueAC, setNewMinValueAC, SettingStateType} from "../Redux/counterSetting-reducer";

export const Counter = () => {

    const dispatch: Dispatch<any> = useDispatch()

    const {newMaxValue, newMinValue}=useSelector<AppStateType,SettingStateType>(state => state.counterSettingReducer)
    const {maxValue,minValue,currentValue}=useSelector<AppStateType,CounterStateType>(state => state.counterReducer)

    const [isSaved, setIsSaved] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const increment = () => {
        if(currentValue!==undefined){
            const newValue = currentValue + 1
            dispatch(setCurrentValueAC(newValue))
        }
    }
    const reset = () => dispatch(setCurrentValueAC(minValue))

    const setMax = (value:number) => {
        dispatch(setNewMaxValueAC(value))
        if (isSaved) setIsSaved(false)
        setError('enter values and press "set"')
    }
    const setMin = (value:number) => {
        dispatch(setNewMinValueAC(value))
        if (isSaved) setIsSaved(false)
        setError('enter values and press "set"')
    }

    const setValues = () => {
        const max=newMaxValue
        const min=newMinValue
        const newCounterValues={max,min}

        localStorage.setItem("counterValues", JSON.stringify(newCounterValues))
        dispatch(setCounterValuesAC(newCounterValues.max,newCounterValues.min))
        dispatch(setCurrentValueAC(newCounterValues.min))

        setError('')
        setIsSaved(true)
    }

    useEffect(() => {
        let valueAsString = localStorage.getItem("counterValues")
        if (valueAsString) {
            let newValues = JSON.parse(valueAsString)

            dispatch(setCounterValuesAC(newValues.max,newValues.min))
            dispatch(setCurrentValueAC(newValues.min))
            dispatch(setNewMaxValueAC(newValues.max))
            dispatch(setNewMinValueAC(newValues.min))
        }
    }, [])

    useEffect(() => {
        if (newMaxValue <= newMinValue || newMinValue < 0) {
            setError('Incorrect value!')
            setIsSaved(true)
        }
    }, [newMaxValue,newMinValue])

    const disableInc = () => currentValue === maxValue || !!error

    const disableReset = () => currentValue === minValue || !!error

    const disableSet = () => isSaved

    return <div className={s.counterWithSettings}>
        <div className={s.counter}>
            <DisplayWithSettings setMax={setMax}
                                 setMin={setMin}
                                 />
            <div className={s.controls}>
                <Control title="Set"
                         count={currentValue}
                         action={setValues}
                         setDisabled={disableSet}/>
            </div>
        </div>

        <div className={s.counter}>
            <Display count={currentValue}
                     maxValue={maxValue}
                     error={error}
            />

            <div className={s.controls}>
                <Control title="Inc"
                         count={currentValue}
                         action={increment}
                         setDisabled={disableInc}/>

                <Control title="Reset"
                         count={currentValue}
                         action={reset}
                         setDisabled={disableReset}/>
            </div>
        </div>
    </div>
}