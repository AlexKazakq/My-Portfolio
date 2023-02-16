import React from "react";
import s from "./Footer.module.scss"
import {Title} from "../common/components/Title/Title";
import {SocialIcons} from "../assets/image/socialIconsSVGR/SocialIcons";

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={s.footerContainer}>
                <Title text={"Alexandr Kazakov"}/>
                <SocialIcons/>
                <span className={s.copyright}>© 2022 All rights reserved</span>
            </div>
        </div>
    );
};

