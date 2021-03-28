import React, {useState} from "react";
import {Button} from "../../Button/Button";
import style from "./CounterSetting.module.css"

type CounterSettingsProps = {
    nameSet: string
    minValue: number
    maxValue: number
    setMax: (maxValue: number) => void
    setMin: (minValue: number) => void
    saveSettings: () => void
    errorDisplayed: string
    errorMessage: { incorrect: string, correct: string }
}

export const CounterSettings: React.FC<CounterSettingsProps> = (props) => {
    const [disableBtn, setDisableBtn] = useState(true)
    const maxOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setMax(+e.currentTarget.value)
        if (+e.currentTarget.value > props.minValue && +e.currentTarget.value !== props.minValue && +e.currentTarget.value > 0) {
            setDisableBtn(false)
        } else {
            setDisableBtn(true)
        }
    }
    const minOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setMin(+e.currentTarget.value)
        if (+e.currentTarget.value < props.maxValue && +e.currentTarget.value !== props.maxValue && +e.currentTarget.value >= 0) {
            setDisableBtn(false)
        } else {
            setDisableBtn(true)
        }
    }
    const save = () => {
        props.saveSettings()
        setDisableBtn(true)
    }
    return (
        <div className={style.settingBox}>
            <div className={style.valuesBox}>
                <div className={style.changeValueBoxes}>
                    <p>max value: </p>
                    <input className={props.errorDisplayed === props.errorMessage.incorrect ? style.bgRed : ''}
                           type='number'
                           onChange={e => maxOnChange(e)}
                           value={props.maxValue}/>
                </div>
                <div className={style.changeValueBoxes}>
                    <p>min value: </p>
                    <input className={props.errorDisplayed === props.errorMessage.incorrect ? style.bgRed : ''}
                           type='number'
                           onChange={e => minOnChange(e)}
                           value={props.minValue}/>
                </div>
            </div>
            <div className={style.settingButton}>
                <Button onclick={save} name={props.nameSet} error={disableBtn}/>
            </div>
        </div>
    )
}