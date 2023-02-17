import React from "react";
import s from "./Skills.module.scss"
import {Skill} from "./Skill/Skill";
import {Title} from "../common/components/Title/Title";
import jsLogo from "../assets/image/skill-icons/js.svg"
import cssLogo from "../assets/image/skill-icons/css.svg"
import reactLogo from "../assets/image/skill-icons/react.svg"

const Fade = require("react-reveal/Fade");

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
        <div id={'skills'} className={s.skillsBlock}>
            <Fade>
                <div className={s.skillsContainer}>
                    <Title text={"My skills"}/>
                    <div className={s.skills}>
                        <Fade left><Skill
                            style={js}
                            title={"JavaScript"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et laudantium nostrum tempora! Aperiam at blanditiis,"}
                        /></Fade>

                        <Fade><Skill
                            style={css}
                            title={"CSS"}
                            description={"dolores ducimus iste nam nemo neque nisi non officiis quis quod reiciendis, rem sint suscipit ullam vel voluptatum?"}
                        /></Fade>

                        <Fade right><Skill
                            style={react}
                            title={"React"}
                            description={"Aliquid omnis possimus quos. Adipisci animi aperiam consequuntur cumque facere nihil, quae quod soluta sunt tempora"}
                        /></Fade>

                    </div>
                </div>
            </Fade>
        </div>
    )
        ;
};

