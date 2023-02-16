import React from "react";
import s from "./Button.module.scss";

type ButtonPropsType = {
    title: string
}
export const Button = ({title}: ButtonPropsType) => {
    return (
            <a href={'#'} className={s.button}>{title}</a>
    );
};
