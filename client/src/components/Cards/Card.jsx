import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import s from "./Card.module.css";

export default function Card({ data }) {
  return (
    <div className={s.card_container}>
      <div className={s.card_content}>
        <div className={s.card_title}>
          <h2>{data.title}</h2>
          <div>
            <a href={data.deploy} target="_blank">
              <FiExternalLink className={s.card_icon} />
            </a>
            <a href={data.repo} target="_blank">
              <BsGithub className={s.card_icon} />
            </a>
          </div>
        </div>
        <p className={s.card_description}>{data.description}</p>
        <div className={s.card_labels_group}>
          {data?.tags.length > 0 &&
            data.tags.map((tag, i) => {
              return (
                <span key={tag + data.title + i} className={s.card_label}>
                  {tag}
                </span>
              );
            })}
        </div>
      </div>
    </div>
  );
}
