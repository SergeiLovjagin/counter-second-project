import React from "react";
import style from "./Counter.module.css"
import {Button} from "../../Button/Button";

type CounterProps = {
    error: boolean
    errorDisplayed: string
    counterValue: number
    nameDel: string
    nameInc: string
    increaseValue: () => void
    eraseValue: () => void
    minValue: number
    errorMessage: { incorrect: string, correct: string }
}
export const Counter: React.FC<CounterProps> = (props) => {
    const disabledDelBtn = props.counterValue === props.minValue || props.errorDisplayed.length > 0
    return (
        <div className={style.counterBox}>
            <div className={style.counterValue}>
                <span className={`${props.error || props.errorDisplayed === props.errorMessage.incorrect ? style.errorValue : ''}`}>
                    {props.errorDisplayed.length > 0 ? props.errorDisplayed : props.counterValue}
                </span>
            </div>
            <div className={style.counterBtnsBlock}>
                <Button onclick={props.increaseValue} name={props.nameInc} error={props.error || props.errorDisplayed.length > 0}/>
                <Button onclick={props.eraseValue} name={props.nameDel} error={disabledDelBtn}></Button>
            </div>
        </div>
    )
}