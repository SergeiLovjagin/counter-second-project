import {RootState} from "./Redux-store";
import {InitialStateType} from "./Counter-reducer";

export const selectorCounter = (state : RootState): InitialStateType => {
    return state.counter

}