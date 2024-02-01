import { useState } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss"
import { ButtonViewVariant } from "./constants";

export const Button = ({
    onClick,
    children,
    className,
    viewVariant = ButtonViewVariant.primary,
    disabled,

}) => {


    return (
        <button
            className={classNames(
                styles[viewVariant]
            )   
        } 
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>

    );
};