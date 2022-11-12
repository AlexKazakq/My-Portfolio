import React from "react";
import s from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className= {`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>My skills</h2>
                <div className={s.skills}>
                    <Skill title={'JavaScript'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et laudantium nostrum tempora! Aperiam at blanditiis,'}/>
                    <Skill title={'CSS'} description={'dolores ducimus iste nam nemo neque nisi non officiis quis quod reiciendis, rem sint suscipit ullam vel voluptatum?'}/>
                    <Skill title={'React'} description={'Aliquid omnis possimus quos. Adipisci animi aperiam consequuntur cumque facere nihil, quae quod soluta sunt tempora'}/>

                </div>
            </div>
        </div>
    );
};

