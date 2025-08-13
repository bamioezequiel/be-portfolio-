import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Cards/Card";
import s from "./Projects.module.css";
import { projects } from "../../data/projectsData";
import { FaArrowLeft } from "react-icons/fa";

export default function Projects() {
  const navigate = useNavigate();

  const allLanguages = [
    ...new Set(projects.flatMap((project) => project.languages)),
  ];

  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Resetea la página al cambiar filtro
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedLanguage]);

  const filteredProjects = selectedLanguage
    ? projects.filter((project) =>
        project.languages.includes(selectedLanguage)
      )
    : projects;

  const projectsPerPage = 5;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Calcular índices para paginar
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const toggleLanguage = (lang) => {
    if (selectedLanguage === lang) {
      setSelectedLanguage("");
    } else {
      setSelectedLanguage(lang);
    }
  };

  // Funciones para cambiar página
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const goNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goPrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <section className={s.projectSection}>
      <div className={s.containerProjects}>
        <button
          onClick={() => navigate(-1)}
          className={s.btnBack}
          aria-label="Volver a la página anterior"
        >
          <FaArrowLeft className={s.iconBack} /> Volver
        </button>

        <h2 className={s.sectionTitle}>🚀 Mis Proyectos</h2>

        <div className={s.filterTagsContainer}>
          <button
            className={`${s.filterTag} ${
              selectedLanguage === "" ? s.activeTag : ""
            }`}
            onClick={() => setSelectedLanguage("")}
          >
            Todos
          </button>

          {allLanguages.map((lang) => (
            <button
              key={lang}
              className={`${s.filterTag} ${
                selectedLanguage === lang ? s.activeTag : ""
              }`}
              onClick={() => toggleLanguage(lang)}
            >
              {lang}
            </button>
          ))}
        </div>

        <div className={s.projectList}>
          {currentProjects.length > 0 ? (
            currentProjects.map((project) => (
              <Card key={project.id} {...project} />
            ))
          ) : (
            <p>No hay proyectos para este lenguaje.</p>
          )}
        </div>

        {/* Paginación */}
        {totalPages > 1 && (
          <div className={s.pagination}>
            <button
              onClick={goPrev}
              disabled={currentPage === 1}
              className={s.pageButton}
              aria-label="Página anterior"
            >
              ←
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => goToPage(i + 1)}
                className={`${s.pageButton} ${
                  currentPage === i + 1 ? s.activePageButton : ""
                }`}
                aria-current={currentPage === i + 1 ? "page" : undefined}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={goNext}
              disabled={currentPage === totalPages}
              className={s.pageButton}
              aria-label="Página siguiente"
            >
              →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
