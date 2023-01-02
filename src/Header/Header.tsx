import React from "react";
import s from './Header.module.scss'
import {Nav} from "./Nav/Nav";
import logoImg from '../assets/image/portfolio-logo.svg'

export const Header = () => {


    return (
        <div className={s.header}>
            <div className={s.logoImg} style={{backgroundImage: `url(${logoImg})`}}></div>
            <Nav />
        </div>
    );
};

