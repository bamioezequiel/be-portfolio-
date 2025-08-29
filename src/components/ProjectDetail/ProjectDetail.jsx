import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import s from "./ProjectDetail.module.css";
import { FaGithub, FaVideo, FaArrowLeft, FaDesktop } from "react-icons/fa";

import { projects } from "../../data/projectsData";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id.toString() === id);

  const images = project?.images && project.images.length > 0 ? project.images : [project?.img];
  const [mainImage, setMainImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return; // No slide if 0 or 1 image

   /* const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        setMainImage(images[nextIndex]);
        return nextIndex;
      });
    }, 4000); // Cambia imagen cada 4 segundos*/

    //return () => clearInterval(interval);
  }, [images]);

  if (!project) {
    return <h2>Proyecto no encontrado</h2>;
  }

  return (
    <div className={s.detailContainer}>
      <div className={s.detailContent}>
        <button className={s.btnBack} onClick={() => navigate(-1)}>
          <FaArrowLeft /> Volver
        </button>

        <div className={s.header}>
          <img src={mainImage} alt={project.title} className={s.mainImage} />

          <div className={s.dateBadge}>
            <span className={s.day}>{project.dateDay}</span>
            <span className={s.month}>{project.dateMonth}</span>
            <span className={s.year}>{project.dateYear || "2025"}</span>
          </div>
        </div>

        {images.length > 1 && (
          <div className={s.gallery}>
            {images.map((imgUrl, idx) => (
              <img
                key={idx}
                src={imgUrl}
                alt={`${project.title} imagen ${idx + 1}`}
                className={`${s.thumbnail} ${mainImage === imgUrl ? s.activeThumbnail : ""}`}
                onClick={() => {
                  setMainImage(imgUrl);
                  setCurrentIndex(idx);
                }}
              />
            ))}
          </div>
        )}
        <div className={s.contentWrapper}>
          
          <h1 className={s.title}>{project.title}</h1>

          <p 
            className={s.description} 
            dangerouslySetInnerHTML={{ __html: project.description }} 
          />

        </div>

        <div className={s.links}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <FaGithub /> Código en GitHub
            </a>
          )}
          {project.video && (
            <a href={project.video} target="_blank" rel="noopener noreferrer">
              <FaVideo /> Ver Video
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <FaDesktop /> Ver Proyecto
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
