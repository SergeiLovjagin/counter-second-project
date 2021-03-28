import React from "react";
import {Counter} from "./CounterModule/Counter";
import {connect} from "react-redux";
import {actions} from "../Redux/Counter-reducer";
import {StoreType} from "../Redux/Redux-store";
import {CounterSettings} from "./CounterSettings/CounterSettings";

const CounterContainer: React.FC<CounterContainerProps> = (props) => {
    return (
        <>
            <Counter error={props.error}
                     errorDisplayed={props.errorDisplayed}
                     counterValue={props.counterValue}
                     nameDel={props.nameDel}
                     nameInc={props.nameInc}
                     increaseValue={props.increaseValue}
                     eraseValue={props.eraseValue}
                     minValue={props.minValue}
                     errorMessage={props.errorMessage}
            />
            <CounterSettings nameSet={props.nameSet}
                             minValue={props.minValue}
                             maxValue={props.maxValue}
                             setMax={props.setMax}
                             setMin={props.setMin}
                             errorDisplayed={props.errorDisplayed}
                             saveSettings={props.saveSettings}
                             errorMessage={props.errorMessage}
            />
        </>
    )
}
type mapStateToPropsType = {
    nameInc: string
    nameDel: string
    nameSet: string
    counterValue: number
    minValue: number
    maxValue: number
    error: boolean
    errorDisplayed: string
    errorMessage: { incorrect: string, correct: string }
}
type mapDispatchToPropsType = {
    increaseValue: () => void
    eraseValue: () => void
    setMax: (maxValue: number) => void
    setMin: (minValue: number) => void
    saveSettings: () => void
}
type CounterContainerProps = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: StoreType): mapStateToPropsType => {
    return {
        nameInc: state.counter.nameInc,
        nameDel: state.counter.nameDel,
        nameSet: state.counter.nameSet,
        counterValue: state.counter.counterValue,
        minValue: state.counter.minValue,
        maxValue: state.counter.maxValue,
        error: state.counter.error,
        errorDisplayed: state.counter.errorDisplayed,
        errorMessage: state.counter.errorMessage
    }
}

export default connect(mapStateToProps, {
    increaseValue: actions.increaseValue,
    eraseValue: actions.eraseValue,
    setMax: actions.setMax,
    setMin: actions.setMin,
    saveSettings: actions.saveSettings,
})(CounterContainer)