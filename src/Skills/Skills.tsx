import React from "react";
import s from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import {Title} from "../common/components/title/Title";
import jsLogo from '../assets/image/skill-icons/js.svg'
import cssLogo from '../assets/image/skill-icons/css.svg'
import reactLogo from '../assets/image/skill-icons/react.svg'

export const Skills = () => {

    const js = {
        backgroundImage: `url(${jsLogo})`
    }
    const css = {
        backgroundImage: `url(${cssLogo})`
    }
    const react = {
        backgroundImage: `url(${reactLogo})`
    }


    return (
        <div className={s.skillsBlock}>
            <div className= {`${styleContainer.container} ${s.skillsContainer}`}>
                <Title text={'My skills'}/>
                <div className={s.skills}>
                    <Skill style={js} title={'JavaScript'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et laudantium nostrum tempora! Aperiam at blanditiis,'}/>
                    <Skill  style={css} title={'CSS'} description={'dolores ducimus iste nam nemo neque nisi non officiis quis quod reiciendis, rem sint suscipit ullam vel voluptatum?'}/>
                    <Skill style={react} title={'React'} description={'Aliquid omnis possimus quos. Adipisci animi aperiam consequuntur cumque facere nihil, quae quod soluta sunt tempora'}/>

                </div>
            </div>
        </div>
    );
};

