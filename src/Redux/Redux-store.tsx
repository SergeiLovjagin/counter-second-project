import {combineReducers, createStore} from 'redux';
import {CounterReducer} from "./Counter-reducer";

export type StoreType = ReturnType<typeof rootReducer>
const rootReducer = combineReducers({
    counter: CounterReducer,
})

export type InferValueType<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never
export const store = createStore(rootReducer)