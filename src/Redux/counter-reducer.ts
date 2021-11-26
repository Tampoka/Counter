export type CounterValuesType = {
    maxValue: number
    minValue: number
}

export type StateType = {
    counterValues: CounterValuesType,
    newCounterValues: CounterValuesType
}

const SET_NEW_MAX_VALUE = "SET_NEW_MAX_VALUE";
const SET_NEW_MIN_VALUE = "SET_NEW_MIN_VALUE";
const SET_COUNTER_VALUES = "SET_COUNTER_VALUES";

let initialState = {
    counterValues: {
        maxValue: 5,
        minValue: 0
    },
    newCounterValues: {
        maxValue: 5,
        minValue: 0
    }
}

export const counterReducer = (state: StateType = initialState, action: ActionValuesType): StateType => {
    switch (action.type) {
        case SET_NEW_MAX_VALUE:
            return {...state, newCounterValues: {...state.newCounterValues, maxValue: action.value}};
        case SET_NEW_MIN_VALUE:
            return {...state, newCounterValues: {...state.newCounterValues, minValue: action.value}};
        case SET_COUNTER_VALUES:
            return {...state, counterValues: {maxValue: action.maxValue, minValue: action.minValue}};
        default:
            return state;
    }
}

type SetNewMaxValueACType = ReturnType<typeof setNewMaxValueAC>
type SetNewMinValueACType = ReturnType<typeof setNewMinValueAC>
type SetCounterValuesACType = ReturnType<typeof setCurrentValueAC>

export type ActionValuesType = SetNewMaxValueACType | SetNewMinValueACType | SetCounterValuesACType

export const setNewMaxValueAC = (value: number) => ({
    type: SET_NEW_MAX_VALUE,
    value
} as const);

export const setNewMinValueAC = (value: number) => ({
    type: SET_NEW_MIN_VALUE,
    value
} as const);

export const setCurrentValueAC = (maxValue: number, minValue: number) => ({
    type: SET_COUNTER_VALUES,
    maxValue,
    minValue
} as const);