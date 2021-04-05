import React, {Dispatch, useState} from "react";
import {Button} from "../../Button/Button";
import style from "./CounterSetting.module.css"
import {useDispatch, useSelector} from "react-redux";
import {actions, CounterAcType} from "../../Redux/Counter-reducer";
import {selectorCounter} from "../../Redux/selectors";

export const CounterSettings: React.FC = () => {
    const {
        buttonNames,
        minValue,
        maxValue,
        errorDisplayed,
        errorMessage: {incorrect}
    } = useSelector(selectorCounter)

    const dispatch = useDispatch<Dispatch<CounterAcType>>()

    const [disableBtn, setDisableBtn] = useState(true)

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let valueE = +e.currentTarget.value
        if (e.currentTarget.dataset.name === 'max') {
            dispatch(actions.setMax(valueE))
            if (valueE > minValue && valueE !== minValue && valueE > 0) {
                setDisableBtn(false)
            } else {
                setDisableBtn(true)
            }
        }
        if (e.currentTarget.dataset.name === 'min') {
            dispatch(actions.setMin(valueE))
            if (valueE < maxValue && valueE !== maxValue && valueE >= 0) {
                setDisableBtn(false)
            } else {
                setDisableBtn(true)
            }
        }
    }
    const onSaveButton = () => {
        dispatch(actions.saveSettings())
        setDisableBtn(true)
    }

    return (
        <div className={style.settingBox}>
            <div className={style.valuesBox}>
                <div className={style.changeValueBoxes}>
                    <p>max value: </p>
                    <input className={errorDisplayed === incorrect ? style.bgRed : ''}
                           type='number'
                           onChange={e => onInputChange(e)}
                           value={maxValue}
                           data-name='max'
                    />

                </div>
                <div className={style.changeValueBoxes}>
                    <p>min value: </p>
                    <input className={errorDisplayed === incorrect ? style.bgRed : ''}
                           type='number'
                           onChange={e => onInputChange(e)}
                           value={minValue}
                           data-name='min'
                    />
                </div>
            </div>
            <div className={style.settingButton}>
                <Button onclick={onSaveButton} name={buttonNames[2]} disabled={disableBtn}/>
            </div>
        </div>
    )
}