import React from "react";
import s from './Skill.module.scss'


type SkillPropsType = {
    title: string
    description: string
    style: {
        backgroundImage: string
    }
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.iconBlock}>
                <div className={s.icon} style={props.style}></div>
            </div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};

