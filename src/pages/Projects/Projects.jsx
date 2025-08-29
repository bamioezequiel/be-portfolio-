import React, { useState, useEffect } from "react";
import Card from "../../components/Cards/Card";
import s from "./Projects.module.css";
import { projects } from "../../data/projectsData";
import { FaArrowLeft } from "react-icons/fa";
import Button from "../../components/Button/Button";

export default function Projects() {

  const allLanguages = [...new Set(projects.flatMap((p) => p.languages))];

  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedLanguage]);

  const filteredProjects = selectedLanguage
    ? projects.filter((p) => p.languages.includes(selectedLanguage))
    : projects;

  const projectsPerPage = 5;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Paginación
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);

  const toggleLanguage = (lang) =>
    setSelectedLanguage((prev) => (prev === lang ? "" : lang));

  const goToPage = (n) => setCurrentPage(n);
  const goNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const goPrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  return (
    <section className={s.projectSection}>
      <div className={s.containerProjects}>
        <Button />      

        <h2 className={s.sectionTitle}>🚀 Mis Proyectos</h2>

        {/* Filtros */}
        <div className={s.filterTagsContainer}>
          <button
            className={`${s.filterTag} ${selectedLanguage === "" ? s.activeTag : ""}`}
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

        {/* Lista de proyectos */}
        <div className={s.projectList}>
          {currentProjects.length > 0 ? (
            currentProjects.map((project) => <Card key={project.id} {...project} />)
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
