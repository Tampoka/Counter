

export type StateType = {
    newMaxValue: number,
    newMinValue: number
}

const SET_NEW_MAX_VALUE = "SET_NEW_MAX_VALUE";
const SET_NEW_MIN_VALUE = "SET_NEW_MIN_VALUE";


let initialState = {
        newMaxValue: 5,
        newMinValue: 0,
}

export const counterSettingReducer = (state: StateType = initialState, action: ActionValuesType): StateType => {
    switch (action.type) {
        case SET_NEW_MAX_VALUE:
            return {...state,  newMaxValue: action.value};
        case SET_NEW_MIN_VALUE:
            return {...state,newMinValue: action.value};

    }
}

type SetNewMaxValueACType = ReturnType<typeof setNewMaxValueAC>
type SetNewMinValueACType = ReturnType<typeof setNewMinValueAC>


export type ActionValuesType = SetNewMaxValueACType | SetNewMinValueACType

export const setNewMaxValueAC = (value: number) => ({
    type: SET_NEW_MAX_VALUE,
    value
} as const);

export const setNewMinValueAC = (value: number) => ({
    type: SET_NEW_MIN_VALUE,
    value
} as const);

