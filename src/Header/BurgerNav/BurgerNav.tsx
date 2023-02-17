import React, {useState} from "react";
import s from "./BurgerNav.module.scss"
import {Link, animateScroll as scroll} from "react-scroll";

export const BurgerNav = () => {
    let [menuIsOpen, setMenuIsOpen] = useState(false);

    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
        console.log(menuIsOpen)
    }

    return (
        <div className={s.burgerNav}>
            <div className={menuIsOpen? `${s.burgerNavItems} ${s.show}` : s.burgerNavItems}>
                <Link
                    activeClass={s.active}
                    to={"main"}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                >Main</Link>
                <Link
                    activeClass={s.active}
                    to={"skills"}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                >Skills</Link>
                <Link
                    activeClass={s.active}
                    to={"works"}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                >Projects</Link>
                <Link
                    activeClass={s.active}
                    to={"contacts"}
                    spy={true}
                    smooth={true}
                    offset={-79}
                    duration={500}
                >Contacts</Link>
            </div>
            <div onClick={onBurgerBtnClick} className={s.burgerBtn}></div>
        </div>
    );
};

