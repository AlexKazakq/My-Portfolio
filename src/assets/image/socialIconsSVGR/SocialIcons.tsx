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
                        <Fade direction={'left'}> <a href={"https://www.codewars.com/users/AlexKazakqq"}><CodeWarsSVGR/></a></Fade>
                    </div>
                    <div className={s.socialIcon}>
                        <Fade direction={"left"}><a href={"https://github.com/AlexKazakq"}><GitHubSVGR/></a></Fade>
                    </div>
                    <div className={s.socialIcon}>
                        <Fade direction={'right'}><a href={"https://www.linkedin.com/in/alexandr-kazakov-393403260/"}><LinkedInSVGR/></a></Fade>
                    </div>
                    <div className={s.socialIcon}>
                        <Fade direction={'right'}><a href={"https://t.me/alexkazakq"}><TelegramSVGR/></a></Fade>
                    </div>
            </div>
    );
};

