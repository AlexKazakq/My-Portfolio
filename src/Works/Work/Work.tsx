import React from "react";
import s from './Work.module.css'

type WorkPropsType = {
    title: string
    description: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <div className={s.workBlock}>
            <div className={s.imgBlock}>
                <img className={s.img}/>
                <a className={s.button}>Show</a>
            </div>
            <div className={s.descriptionBlock}>
                <h3 className={s.title}>{props.title}</h3>
                <p className={s.description}>{props.description}</p>
            </div>
        </div>
    );
};

