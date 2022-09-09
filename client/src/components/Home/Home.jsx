import React from "react";
import { BsGithub } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";
import "./Home.css";
import {
  AiOutlineFileText,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import CV from "./../../assets/CV-Bamio,Ezequiel.pdf";

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <div className="hero-name">Bamio, Ezequiel</div>

            <div className="hero-desc">Full Stack Developer</div>
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
            <NavLink to="/projects " className="hero-btn">
              <AiOutlineFundProjectionScreen /> Proyectos
            </NavLink>
            <a href={CV} download className="hero-btn">
              <AiOutlineFileText /> Curriculum
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
