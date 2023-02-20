import React, {useState} from "react";
import s from "./Contacts.module.scss"
import {Title} from "../common/components/Title/Title";
import {useFormik} from "formik";
import axios from "axios";
const Fade = require("react-reveal/Fade");

export const Contacts = () => {

    const [isSending, setIsSending] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        onSubmit: async values => {
            setIsSending(true)
            await axios.post('https://gmail-from-portfolio.vercel.app/sendMessage', {name: values.name, email: values.email, message: values.message})
            alert('Your message has been send')
            setIsSending(false)
            formik.resetForm()
        },
    })

    return (
        <div id={'contacts'} className={s.contactsBlock}>
            <Fade>
                <div className={s.contactsContainer}>
                    <Title text={"Contacts"}/>
                    <Fade left>
                        <form className={s.form} onSubmit={formik.handleSubmit} >
                            <input placeholder={"Name"} type={"text"} className={s.formArea} {...formik.getFieldProps("name")}/>
                            <input placeholder={"e-mail"} type={"text"} className={s.formArea} {...formik.getFieldProps("email")}/>
                            <textarea placeholder={"Message"} className={s.messageArea} {...formik.getFieldProps("message")}></textarea>
                            <button type={"submit"} disabled={isSending}>Send</button>
                        </form>
                    </Fade>
                </div>
            </Fade>
        </div>

    );
};

