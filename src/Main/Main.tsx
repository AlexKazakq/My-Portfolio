import React from "react";
import s from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import mainPhoto from '../assets/image/main-photo.jpg'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${styleContainer.container} ${s.mainContainer}`}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1 className={s.title}>I am Alexandr Kazakov</h1>
                    <p>Front-end Developer</p>
                </div>
                <div className={s.photo} style={{backgroundImage: `url(${mainPhoto})`}}></div>
            </div>
        </div>
    );
};

