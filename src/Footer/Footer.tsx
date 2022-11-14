import React from "react";
import styleContainer from "../common/styles/Container.module.css"
import s from "./Footer.module.css"

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.container}`}>
                <span className={s.name}>Alexandr Kazakov</span>
                <div className={s.squares}>
                    <div className={s.square}></div>
                    <div className={s.square}></div>
                    <div className={s.square}></div>
                    <div className={s.square}></div>
                </div>
                <span className={s.copyright}>© 2022 All rights reserved</span>
            </div>
        </div>
    );
};

