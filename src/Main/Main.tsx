import React from "react";
import s from "./Main.module.scss";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt"
import {Particle} from "../common/components/Particles/Particles";
const Fade = require("react-reveal/Fade");

export const Main = () => {

    return (
        <div id={'main'} className={s.mainBlock}>
            <Particle/>
            <Fade>
                <div className={s.mainContainer}>
                    <div className={s.text}>
                        <span>Hi There</span>
                        <span className={s.title}>I am Alexandr <span>Kazakov</span></span>
                        <ReactTypingEffect text={"Front-end Developer"}/>
                    </div>
                    <Tilt>
                        <div className={s.photo}>
                            <div className={s.image}></div>
                        </div>
                    </Tilt>
                </div>
            </Fade>
        </div>
    );
};

