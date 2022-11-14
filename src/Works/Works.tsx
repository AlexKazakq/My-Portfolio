import React from "react";
import s from './Works.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Work} from "./Work/Work";

export const Works = () => {
    return (
        <div className={s.worksBlock}>
            <div className={`${styleContainer.container} ${s.worksContainer}`}>
                <div className={s.title}>
                    <span className={s.titleText}>My works</span>
                </div>
                <div className={s.worksItem}>
                    <Work title={'TodoList'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Work title={'Social Network'} description={'Alias aut cumque, ducimus in laboriosam odio possimus quasi sapiente vitae.'}/>
                </div>

            </div>
        </div>
    );
};

