import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../Cards/Card";
import s from "./Projects.module.css";

export default function Projects() {
  const food = {
    title: 'Food App',
    description: 'Desarrollo de una SPA (Single Page Application), con tecnologías para el backend PostgreSQL, Sequelize, Node.js y Express.js. Para el frontend, la aplicación fue desarrollada usando React, Redux, Redux Thunks, HTML, CSS Puro. Utilizando como lenguaje de programación JavaScript ES6',
    repo: 'https://github.com/bamioezequiel/PI-Food-main',
    deploy: 'https://pi-food-bamio-ezequiel.vercel.app/',
    tags: [
      'JavaScript',
      'React',
      'Redux',
      'HTML',
      'CSS',
      'NodeJS',
      'Express',
      'Sequelize',
      'PostgreSQL',
    ],
  };
  const travel = {
    title: 'HenryTravel',
    description: 'Desarrollo en grupo de una Single Page Application usando metodologías ágiles de desarrollo de software (SCRUM) con sprints de una semana. Estuve a cargo de la parte frontend del sitio web, desarrollando componentes y añadiendo estilos con CSS Puro.',
    repo: 'https://github.com/bamioezequiel/proyecto-final-henry',
    deploy: 'https://proyecto-final-henry.vercel.app/',
    tags: [
      'JavaScript',
      'React',
      'Redux',
      'Bootstrap',
      'HTML',
      'CSS',
      'NodeJS',
      'Express',
      'Sequelize',
      'PostgreSQL',
      'Auth0',
    ],
  }

  return (
    <div>
      <div className={s.projects_back_container}>
        <NavLink to="/" className={s.projects_back}>
          Volver
        </NavLink>
      </div>

      <div className={s.projects_container}>
        <div className={s.projects_cards}>
          <Card
            data={food}
          />
          <Card
            data={travel}
          />
        </div>
      </div>
    </div>
  );
}
