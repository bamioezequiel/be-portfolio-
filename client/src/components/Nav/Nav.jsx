import React from 'react'
// import { TbWorld } from 'react-icons/tb';
// import { MdLightMode, MdModeNight } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

export default function Nav() {
    return (
        <div className={s.nav_container}>
            <NavLink to='/' className={s.nav_logo}>BE</NavLink>
            <div className={s.nav_menu}>
                <NavLink to='/' className={s.nav_item}>Home</NavLink>
                <NavLink to='/' className={s.nav_item}>Projects</NavLink>
                <NavLink to='/' className={s.nav_item}>Resume</NavLink>
                <NavLink to='/' className={s.nav_item}>Contact Me</NavLink>
                {/* <NavLink to='/' className={s.nav_item_ico}><TbWorld /></NavLink> */}
                {/* <NavLink to='/' className={s.nav_item_ico}><MdModeNight /></NavLink> */}
            </div>           
        </div>
    )
}