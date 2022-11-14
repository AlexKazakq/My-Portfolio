import React from "react";
import s from './DistantWork.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const DistantWork = () => {
    return (
        <div className={s.distantWork}>
            <div className={`${styleContainer.container} ${s.container}`}>
                <span className={s.text}>Looking into remote work options</span>
                <button className={s.button}>Hire me</button>
            </div>
        </div>
    );
};
