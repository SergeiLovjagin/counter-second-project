import {combineReducers, createStore, applyMiddleware} from 'redux';
import {CounterReducer} from "./Counter-reducer";
import {loadState, saveState} from "../utils/localStorage";
import thunk from 'redux-thunk';


export type RootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    counter: CounterReducer,
})

export type InferValueType<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))
store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    });
});