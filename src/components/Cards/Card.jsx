import React from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaPlayCircle, FaArrowRight } from "react-icons/fa"; // Íconos
import s from "./Card.module.css";

export default function Card({
  id,
  img,
  title,
  description,
  dateDay,
  dateMonth,
  github,
  video
}) {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/projects/${id}`);
  };

  return (
    <div className={s.card} onClick={goToDetail}>
      <div className={s.imageWrapper}>
        <img src={img} alt={title} className={s.image} />
        <div className={s.dateBadge}>
          <span className={s.day}>{dateDay}</span>
          <span className={s.month}>{dateMonth}</span>
        </div>
      </div>

      <div className={s.content}>
        <h1 className={s.title}>{title}</h1>

        <p className={s.description}>{description}</p>

        <div className={s.links}>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub size={22} />
            </a>
          )}
          {video && (
            <a
              href={video}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <FaPlayCircle size={22} />
            </a>
          )}
        </div>
      </div>

      {/* Botón FAB con ícono */}
      <button
        className={s.fab}
        onClick={(e) => {
          e.stopPropagation();
          goToDetail();
        }}
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
}
