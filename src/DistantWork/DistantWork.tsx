import React from "react";
import s from './DistantWork.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";

export const DistantWork = () => {
    return (
        <div className={s.distantWork}>
            <div className={`${styleContainer.container} ${s.container}`}>
                <Title text={'I am available for Freelance'}/>
                <a href={'#'} className={s.button}>Hire me</a>
            </div>
        </div>
    );
};
