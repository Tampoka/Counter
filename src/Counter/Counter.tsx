import React, {useState} from "react";
import {Controls} from "./Controls/Controls";
import {Display} from "./Display/Display";

export const Counter = () => {
    const maxValue: number = 5
    const minValue: number = 0
    let [count, setCount] = useState<number>(minValue)

    const increment = () => {
        setCount(count + 1)
    }
    const reset = () => {
        setCount(minValue)
    }

    return <div>
        <Display count={count}/>
        <Controls count={count}
                  setCount={setCount}
                  increment={increment}
                  reset={reset}
        />
    </div>
}