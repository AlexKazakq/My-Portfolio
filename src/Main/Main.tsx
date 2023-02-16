import React from "react";
import s from "./Main.module.scss";
import ReactTypingEffect from "react-typing-effect";

export const Main = () => {

    return (
        <div className={s.mainBlock}>
            <div className={s.mainContainer}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <span className={s.title}>I am Alexandr <span>Kazakov</span></span>
                    <ReactTypingEffect text={'Front-end Developer'}/>
                </div>
                <div className={s.photo}>
                    <div className={s.image}></div>
                </div>
            </div>
        </div>
    );
};

