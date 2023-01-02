import React from "react";
import s from "./Contacts.module.scss"
import styleContainer from "../common/styles/Container.module.css"
import {Title} from "../common/components/title/Title";

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${s.contactsContainer} ${styleContainer.container}`}>
                <Title text={'Contacts'}/>
                <form className={s.form}>
                    <input type={"text"}/>
                    <input type={"text"}/>
                    <textarea></textarea>
                    <button className={s.button} type={'submit'}>Send</button>
                </form>
            </div>
        </div>
    );
};

