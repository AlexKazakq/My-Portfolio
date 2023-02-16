import React from "react";
import s from "./Works.module.scss"
import {Work} from "./Work/Work";
import {Title} from "../common/components/Title/Title";
import socialImg from "./../assets/image/social-network.jpg"
import todoImg from "./../assets/image/todolist.jpg"


export const Works = () => {
    const social = {
        backgroundImage: `url(${socialImg})`,
    };
    const todoList = {
        backgroundImage: `url(${todoImg})`,
    };
    return (
        <div className={s.worksBlock}>

            <div className={s.worksContainer}>

                <Title text={"My projects"}/>
                <div className={s.worksItem}>
                    <Work style={todoList} title={"TodoList"}
                                                   description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                    <Work style={social} title={"Social Network"}
                                                    description={"Alias aut cumque, ducimus in laboriosam odio possimus quasi sapiente vitae."}/>
                </div>

            </div>

        </div>
    );
};

