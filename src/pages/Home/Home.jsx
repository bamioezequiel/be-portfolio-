import React from "react";
import { BsGithub } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";
import { AiOutlineFileText, AiOutlineFundProjectionScreen, AiOutlineInstagram, AiOutlineUser } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import s from "./Home.module.css";
import NotificationBar from "../../components/NotificationBar/NotificationBar";

export default function Home() {
  return (
    <div className={s.homeContainer}>
      <NotificationBar />
      <div className={s.hero}>
        <div className={s.heroInner}>
          <div className={s.heroText}>
            <div className={s.heroName}>Bamio, Ezequiel</div>
            <div className={s.heroDesc}>BackEnd Developer</div>
          </div>
          <div className={s.heroSocial}>
            <div className={s.heroLink}>
              <a
                href="https://www.linkedin.com/in/ezequielbamio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrLinkedinOption />
              </a>
            </div>
            <div className={s.heroLink}>
              <a
                href="https://github.com/bamioezequiel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub />
              </a>
            </div>
            <div className={s.heroLink}>
              <a
                href="mailto:bamioezequielok@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoIosMail />
              </a>
            </div>
            <div className={s.heroLink}>
              <a
                href="https://www.instagram.com/bamio.dev/" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineInstagram />
              </a>
            </div>
          </div>
        <div className={s.heroMenu}>
  {/* <NavLink to="/flashcard" className={s.heroBtn}>
    <AiOutlineFundProjectionScreen /> Flashcard
  </NavLink> */}

  <NavLink to="/projects" className={s.heroBtn}>
    <AiOutlineFundProjectionScreen /> Proyectos
  </NavLink>

  {/* <NavLink to="/services" className={s.heroBtn}>
    <AiOutlineFileText /> Servicios
  </NavLink> */}

  {/* <NavLink to="/blog" className={s.heroBtn}>
    <AiOutlineUser /> Blog
  </NavLink> */}

  <NavLink to="/laboratory" className={s.heroBtn}>
    <AiOutlineUser /> Laboratorio
  </NavLink>

  <NavLink to="/about" className={s.heroBtn}>
    <AiOutlineUser /> Quien Soy
  </NavLink>
</div>

        </div>
      </div>
      {/* Decoraciones */}
      <div className={s.bgEffect1}></div>
      <div className={s.bgEffect2}></div>
      <div className={s.bgEffect3}></div>
    </div>
  );
}
