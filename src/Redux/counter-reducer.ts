export type StateType = {
    maxValue: number,
    minValue: number,
    currentValue: number
}

const SET_MAX_VALUE = "SET_MAX_VALUE";
const SET_MIN_VALUE = "SET_MIN_VALUE";
const SET_CURRENT_VALUE = "SET_CURRENT_VALUE";


let initialState = {
    maxValue: 5,
    minValue: 0,
    currentValue: 0
}

export const counterReducer = (state: StateType = initialState, action: ActionValuesType): StateType => {
    switch (action.type) {
        case SET_MAX_VALUE:
            return {...state, maxValue: action.value};
        case SET_MIN_VALUE:
            return {...state, minValue: action.value};
        case SET_CURRENT_VALUE:
            return {...state, currentValue: action.value};
        default:
            return state;
    }
}

type SetMaxValueACType = ReturnType<typeof setMaxValueAC>
type SetMinValueACType = ReturnType<typeof setMinValueAC>
type setCurrentValueACType = ReturnType<typeof setCurrentValueAC>

export type ActionValuesType =
    SetMaxValueACType
    | SetMinValueACType
    | setCurrentValueACType

export const setMaxValueAC = (value: number) => ({
    type: SET_MAX_VALUE,
    value
} as const);

export const setMinValueAC = (value: number) => ({
    type: SET_MIN_VALUE,
    value
} as const);

export const setCurrentValueAC = (value: number) => ({
    type: SET_CURRENT_VALUE,
    value
} as const);