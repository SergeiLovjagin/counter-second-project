import React from "react";
import style from "./Button.module.css"

type ButtonType = {
    onclick?: () => void
    name?: string
    disabled?: boolean
}

export const Button: React.FC<ButtonType> = (props) => {
    return <button className={style.btns}
                   onClick={props.onclick}
                   disabled={props.disabled}
    >{props.name}
    </button>
}