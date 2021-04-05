import {InferValueType} from "./Redux-store";

export type InitialStateType = typeof InitialState
export const InitialState = {
    buttonNames: ['inc', 'del', 'set'],
    counterValue: 0,
    minValue: 0,
    maxValue: 5,
    errorDisplayed: '',
    errorMessage: {
        incorrect: 'Incorrect value',
        correct: 'Set the settings and click save'
    }
}
export const CounterReducer = (state: InitialStateType = InitialState, action: CounterAcType) => {
    switch (action.type) {
        case "INCREASE_VALUE": {
            if (state.counterValue < state.maxValue) {
                return {...state, counterValue: state.counterValue + 1}
            } else {
                return state
            }
        }
        case "ERASE_VALUE":
            return {
                ...state, counterValue: state.minValue
            }
        case "SET_MAX": {
            if (action.maxValue <= state.minValue) {
                return {
                    ...state,
                    maxValue: action.maxValue,
                    errorDisplayed: state.errorMessage.incorrect
                }
            } else return {
                ...state,
                maxValue: action.maxValue,
                errorDisplayed: state.errorMessage.correct,
            }
        }
        case "SET_MIN": {
            if (action.minValue >= state.maxValue || action.minValue < 0) {
                return {
                    ...state,
                    minValue: action.minValue,
                    errorDisplayed: state.errorMessage.incorrect
                }
            } else return {
                ...state,
                minValue: action.minValue,
                errorDisplayed: state.errorMessage.correct,
            }
        }
        case "SAVE_SETTINGS":
            return {
                ...state,
                counterValue: state.minValue,
                errorDisplayed: ''
            }
    }
    return state
}

export type CounterAcType = InferValueType<typeof actions>
export const actions = {
    increaseValue: () => ({type: 'INCREASE_VALUE'} as const),
    eraseValue: () => ({type: 'ERASE_VALUE'} as const),
    setMax: (maxValue: number) => ({type: 'SET_MAX', maxValue} as const),
    setMin: (minValue: number) => ({type: 'SET_MIN', minValue} as const),
    saveSettings: () => ({type: 'SAVE_SETTINGS'} as const),
}