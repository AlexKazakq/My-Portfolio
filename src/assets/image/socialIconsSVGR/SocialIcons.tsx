import React from "react";
import s from "./socialIcons.module.scss";
import {CodeWarsSVGR} from "./CodeWarsSVGR/CodeWarsSVGR";
import {GitHubSVGR} from "./GitHubSVGR/GitHubSVGR";
import {LinkedInSVGR} from "./LinkedInSVGR/LinkedInSVGR";
import {TelegramSVGR} from "./TelegramSVGR/TelegramSVGR";
import {Fade} from "react-awesome-reveal";

export const SocialIcons = () => {
    return (
            <div className={s.socialIcons}>

                    <div className={s.socialIcon}>
                        <Fade direction={'left'}> <a href={"#"}><CodeWarsSVGR/></a></Fade>
                    </div>
                    <div className={s.socialIcon}>
                        <Fade direction={"left"}><a href={"#"}><GitHubSVGR/></a></Fade>
                    </div>
                    <div className={s.socialIcon}>
                        <Fade direction={'right'}><a href={"#"}><LinkedInSVGR/></a></Fade>
                    </div>
                    <div className={s.socialIcon}>
                        <Fade direction={'right'}><a href={"#"}><TelegramSVGR/></a></Fade>
                    </div>
            </div>
    );
};

