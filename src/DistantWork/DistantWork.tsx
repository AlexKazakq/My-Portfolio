import React from "react";
import s from "./DistantWork.module.scss"
import {Title} from "../common/components/Title/Title";
import {Button} from "../common/components/Button/Button";
const Fade = require("react-reveal/Fade");

export const DistantWork = () => {
    return (
        <div className={s.distantWork}>
            <Fade>
                <div className={s.container}>
                    <Title text={"I am available for Freelance"}/>
                    <Button title={"Hire me"}/>
                </div>
            </Fade>
        </div>
    );
};
