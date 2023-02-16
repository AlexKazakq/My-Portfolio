import React from "react";
import s from './Nav.module.scss'

export const Nav = () => {
    return (
        <div className={s.nav}>
            <a href="" className={s.link}>Main</a>
            <a href="" className={s.link}>Skills</a>
            <a href="" className={s.link}>Projects</a>
            <a href="" className={s.link}>Contacts</a>
        </div>
    );
};

