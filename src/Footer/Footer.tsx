import React from "react";
import styleContainer from "../common/styles/Container.module.css"
import s from "./Footer.module.scss"
import {Title} from "../common/components/title/Title";

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <Title text={'Alexandr Kazakov'}/>
                <div className={s.socialIcons}>
                    <div className={s.socialIcon}></div>
                    <div className={s.socialIcon}></div>
                    <div className={s.socialIcon}></div>
                    <div className={s.socialIcon}></div>
                </div>
                <span className={s.copyright}>© 2022 All rights reserved</span>
            </div>
        </div>
    );
};

