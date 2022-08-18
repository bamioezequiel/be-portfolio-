import React from "react";
import { SiTypescript, SiExpress, SiSequelize, SiRedux } from "react-icons/si";
import {
  DiBootstrap,
  DiGit,
  DiHeroku,
  DiJavascript1,
  DiNodejs,
  DiPostgresql,
  DiReact,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import s from "./Resume.module.css";

export default function Resume() {
  return (
      <div className={s.resume_container}>
        {/* <h2 className={s.resume_title}>About me</h2> */}
      <div className={s.resume_about}>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore iure quod nemo quibusdam perspiciatis dolorem corporis, consectetur voluptates ut animi reiciendis sequi harum illo nesciunt alias qui eaque optio dolorum?</p>
        <button className={s.resume_btn}>Download Resume</button>
      </div>
      <div className={s.resume_skills}>
        <h2 className={s.resume_title}>Skills</h2>
        <div className={s.resume_skills_row}>
          <div className={s.card_container}>
            <DiJavascript1 className={s.card_icon} />
            <p className={s.card_title}>JavaScript</p>
          </div>
          <div className={s.card_container}>
            <SiTypescript className={s.card_icon} />
            <p className={s.card_title}>TypeScript</p>
          </div>
          <div className={s.card_container}>
            <DiReact className={s.card_icon} />
            <p className={s.card_title}>React</p>
          </div>
          <div className={s.card_container}>
            <SiRedux className={s.card_icon} />
            <p className={s.card_title}>Redux</p>
          </div>
        </div>
        <div className={s.resume_skills_row}>
          <div className={s.card_container}>
            <DiNodejs className={s.card_icon} />
            <p className={s.card_title}>NodeJS</p>
          </div>
          <div className={s.card_container}>
            <SiExpress className={s.card_icon} />
            <p className={s.card_title}>Express</p>
          </div>
          <div className={s.card_container}>
            <SiSequelize className={s.card_icon} />
            <p className={s.card_title}>Sequelize</p>
          </div>
          <div className={s.card_container}>
            <DiPostgresql className={s.card_icon} />
            <p className={s.card_title}>PostgreSQL</p>
          </div>
        </div>
        <div className={s.resume_skills_row}>
          <div className={s.card_container}>
            <DiHtml5 className={s.card_icon} />
            <p className={s.card_title}>HTML</p>
          </div>
          <div className={s.card_container}>
            <DiCss3 className={s.card_icon} />
            <p className={s.card_title}>CSS</p>
          </div>
          <div className={s.card_container}>
            <DiGit className={s.card_icon} />
            <p className={s.card_title}>Git</p>
          </div>
          <div className={s.card_container}>
            <DiBootstrap className={s.card_icon} />
            <p className={s.card_title}>Boostrap</p>
          </div>
        </div>
      </div>
    </div>
  );
}
