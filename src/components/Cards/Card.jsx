import React from "react";
import { BsGithub } from "react-icons/bs";
import { HiLink } from "react-icons/hi";
import s from "./Card.module.css";

export default function Card({ data }) {
  return (
    <div className={s.card_container}>
      <div className={s.card_content}>
        <div className={s.card_image}>
          <img src={data.img} alt={data.title} className={s.card_image_img} />
        </div>

        <div className={s.card_button_group}>
          <a href={data.web} target="_blank" rel="noopener noreferrer" className={s.card_link}>
            <HiLink className={s.card_icon} />
          </a>
          <a href={data.github} target="_blank" rel="noopener noreferrer" className={s.card_link}>
            <BsGithub className={s.card_icon} />
          </a>
        </div>

        <div className={s.card_title}>
          <h2>{data.title}</h2>
        </div>

        <p className={s.card_description}>{data.description}</p>
      </div>
      <div className={s.card_line}></div> {/* Línea amarilla arriba */}
    </div>
  );
}
