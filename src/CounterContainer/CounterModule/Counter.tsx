import React, {Dispatch} from "react";
import style from "./Counter.module.css"
import {Button} from "../../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {actions, CounterAcType} from "../../Redux/Counter-reducer";
import {selectorCounter} from "../../Redux/selectors";

export const Counter: React.FC = () => {
    const {
        errorDisplayed,
        counterValue,
        buttonNames,
        minValue,
        maxValue,
        errorMessage: {incorrect}
    } = useSelector(selectorCounter)

    const dispatch = useDispatch<Dispatch<CounterAcType>>()

    const disabledDelBtn = counterValue === minValue || errorDisplayed.length > 0
    return (
        <div className={style.counterBox}>
            <div className={style.counterValue}>
                <span className={`${maxValue === counterValue || errorDisplayed === incorrect ? style.errorValue : ''}`}>
                    {errorDisplayed.length > 0 ? errorDisplayed : counterValue}
                </span>
            </div>
            <div className={style.counterBtnsBlock}>
                <Button onclick={() => dispatch(actions.increaseValue())} name={buttonNames[0]} disabled={maxValue=== counterValue || errorDisplayed.length > 0}/>
                <Button onclick={() => dispatch(actions.eraseValue())} name={buttonNames[1]} disabled={disabledDelBtn}/>
            </div>
        </div>
    )
}