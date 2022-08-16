import React from 'react'
// import { MdLightMode, MdModeNight } from 'react-icons/md';
import { AiOutlineGlobal, AiOutlineFundProjectionScreen, AiOutlineHome, AiOutlineFileText, AiOutlineContacts } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

export default function Nav() {
    return (
        <div className={s.nav_container}>
            <NavLink to='/' className={s.nav_logo}>BE</NavLink>
            <div className={s.nav_menu}>
                <NavLink to='/' className={s.nav_item}>
                    <AiOutlineHome className={s.nav_item_icon} /> Home
                </NavLink>
                <NavLink to='/projects' className={s.nav_item}>
                    <AiOutlineFundProjectionScreen className={s.nav_item_icon} /> Projects
                </NavLink>
                <NavLink to='/' className={s.nav_item}>
                    <AiOutlineFileText className={s.nav_item_icon} /> Resume
                </NavLink>
                <NavLink to='/' className={s.nav_item}>
                    <AiOutlineContacts className={s.nav_item_icon} />Contact Me
                </NavLink>
            </div>           
        </div>
    )
}