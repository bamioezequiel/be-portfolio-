import React from "react";
import { BsGithub } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";
import "./Home.css";
import {
  AiOutlineFileText,
  AiOutlineFundProjectionScreen,
  AiOutlineUser
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import NotificationBar from "../NotificationBar/NotificationBar";

export default function Home() {
  return (
    <div className="home-container">
            <NotificationBar />
      <div className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <div className="hero-name">Bamio, Ezequiel</div>

            <div className="hero-desc">BackEnd Developer</div>
          </div>
          <div className="hero-social">
            <div className="hero-link">
              <a
                href="https://www.linkedin.com/in/ezequielbamio/"
                target="_blank"
              >
                <GrLinkedinOption />
              </a>
            </div>
            <div className="hero-link">
              <a href="https://github.com/bamioezequiel" target="_blank">
                <BsGithub />
              </a>
            </div>
            <div className="hero-link">
              <a href="mailto: bamioezequielok@gmail.com" target="_blank">
                <IoIosMail />
              </a>
            </div>
          </div>
          <div className="hero-menu">
            <NavLink to="/projects" className="hero-btn">
              <AiOutlineFundProjectionScreen /> Proyectos
            </NavLink>
            <NavLink to="/console" className="hero-btn">
              <AiOutlineFileText /> Consola
            </NavLink>
            <NavLink to="/about" className="hero-btn">
              <AiOutlineUser /> Quien Soy
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
