export type StateType = {
    maxValue: number,
    minValue: number,
    currentValue: number
}

const SET_COUNTER_VALUES = "SET_COUNTER_VALUES"
const SET_CURRENT_VALUE = "SET_CURRENT_VALUE";


let initialState = {
    maxValue: 5,
    minValue: 0,
    currentValue: 0
}

export const counterReducer = (state: StateType = initialState, action: ActionValuesType): StateType => {
    switch (action.type) {
        case SET_COUNTER_VALUES:
            return {...state, maxValue: action.maxValue, minValue: action.minValue};

        case SET_CURRENT_VALUE:
            return {...state, currentValue: action.value};
        default:
            return state;
    }
}


type SetCurrentValueACType = ReturnType<typeof setCurrentValueAC>
type SetCounterValuesACType = ReturnType<typeof setCounterValuesAC>

export type ActionValuesType =
    SetCounterValuesACType
    | SetCurrentValueACType

export const setCounterValuesAC = (maxValue: number, minValue: number) => ({
    type: SET_COUNTER_VALUES,
    maxValue,
    minValue
} as const);

export const setCurrentValueAC = (value: number) => ({
    type: SET_CURRENT_VALUE,
    value
} as const);