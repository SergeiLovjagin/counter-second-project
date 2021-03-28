import {InferValueType} from "./Redux-store";

export type InitialStateType = typeof InitialState
export const InitialState = {
    nameInc: 'inc',
    nameDel: 'del',
    nameSet: 'set',
    counterValue: 0,
    minValue: 0,
    maxValue: 5,
    error: false,
    errorDisplayed: '',
    errorMessage: {
        incorrect: 'Incorrect value',
        correct: 'Set the settings and click save'
    }
}
export const CounterReducer = (state: InitialStateType = InitialState, action: CounterAcType) => {
    switch (action.type) {
        case "INCREASE_VALUE": {
            if (state.counterValue === (state.maxValue - 1)) {
                return {...state, counterValue: state.counterValue + 1, error: true}
            } else if (state.counterValue < state.maxValue) {
                return {
                    ...state, counterValue: state.counterValue + 1
                }
            } else {
                return state
            }
        }
        case "ERASE_VALUE":
            return {
                ...state, counterValue: state.minValue, error: false // потом нужно брать из Мин значения
            }
        case "SET_MAX": {
            if (action.maxValue <= state.minValue || state.maxValue < 0) {
                return {
                    ...state,
                    maxValue: action.maxValue,
                    errorDisplayed: state.errorMessage.incorrect
                }
            } else return {
                ...state,
                maxValue: action.maxValue,
                errorDisplayed: state.errorMessage.correct,
                error: false
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
                error: false
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

type CounterAcType = InferValueType<typeof actions>
export const actions = {
    increaseValue: () => ({type: 'INCREASE_VALUE'} as const),
    eraseValue: () => ({type: 'ERASE_VALUE'} as const),
    setMax: (maxValue: number) => ({type: 'SET_MAX', maxValue} as const),
    setMin: (minValue: number) => ({type: 'SET_MIN', minValue} as const),
    saveSettings: () => ({type: 'SAVE_SETTINGS'} as const),
}