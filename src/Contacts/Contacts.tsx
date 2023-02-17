import React from "react";
import s from "./Contacts.module.scss"
import {Title} from "../common/components/Title/Title";
const Fade = require("react-reveal/Fade");

export const Contacts = () => {
    return (

        <div id={'contacts'} className={s.contactsBlock}>
            <Fade>
                <div className={s.contactsContainer}>
                    <Title text={"Contacts"}/>
                    <Fade left>
                        <form className={s.form}>
                            <input placeholder={"Name"} type={"text"} className={s.formArea}/>
                            <input placeholder={"e-mail"} type={"text"} className={s.formArea}/>
                            <textarea placeholder={"Message"} className={s.messageArea}></textarea>
                            <button type={"submit"}>Send</button>
                        </form>
                    </Fade>
                </div>
            </Fade>
        </div>

    );
};

