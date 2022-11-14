import React from "react";
import s from "./Contacts.module.css"
import styleContainer from "../common/styles/Container.module.css"

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${s.contactsContainer} ${styleContainer.container}`}>
                <span className={s.title}>Contacts</span>
                <form className={s.form}>
                    <input/>
                    <input/>
                    <textarea></textarea>
                </form>
                <button className={s.button}>Send</button>
            </div>
        </div>
    );
};

