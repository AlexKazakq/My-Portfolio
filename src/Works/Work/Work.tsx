import React from "react";
import s from './Work.module.scss'

type WorkPropsType = {
    title: string
    description: string
    style: StylePropsType
}
type StylePropsType = {
    backgroundImage: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <div className={s.workBlock}>
            <div style={props.style} className={s.imgBlock}>
                <a href={'#'} className={s.button}>Show</a>
            </div>
            <div className={s.descriptionBlock}>
                <h3 className={s.title}>{props.title}</h3>
                <p className={s.description}>{props.description}</p>
            </div>
        </div>
    );
};

