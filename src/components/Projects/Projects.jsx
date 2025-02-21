import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../Cards/Card";
import s from "./Projects.module.css";

export default function Projects() {
  const projects = [
    {
      title: "🎮 Videogames",
      description: "Tienda online con login, carrito, filtros y pasarela de pago. Permite comprar videojuegos de forma rápida y segura, mejorando la experiencia del usuario. 🕹️💳",
      img: "https://imgur.com/2bf5yc9.png",
      github: "https://github.com/bamioezequiel/project-videogames",
      web: 'https://project-videogames-rosy.vercel.app/',
    },    
    {
      title: "💰 Payments",
      description: "Sistema para comprar monedas virtuales con MercadoPago. Incluye login, gestión de usuarios y pasarela de pagos, usando TypeScript, Node.js, ReactJS y MongoDB. 🚀🔗",
      img: "https://imgur.com/YoqOwnx.png",
      github: "https://typescript-payments-be.vercel.app/",
      web: 'https://typescript-payments-be.vercel.app/',
    },
    {
      title: "🌍 HenryTravel",
      description: "SPA para comprar paquetes turísticos, con login Auth0, gestión de roles, notificaciones y pagos con Stripe y Mercado Pago. Hecha con tecnologías modernas y metodología ágil. ✈️🏝️",
      img: "https://imgur.com/t4ijk6R.png",
      github: 'https://github.com/bamioezequiel/proyecto-final-henry',
      web: 'https://proyecto-final-henry.vercel.app/',
    },
    {
      title: "📌 PI Food",
      description: "App web para buscar, filtrar y crear recetas con la API Spoonacular. Implementé React, Redux, Node.js, Express y PostgreSQL, optimizando el manejo de datos sin depender de la API. 🍽️✨",
      img: "https://i.imgur.com/KnCap3L.png",
      github: "https://github.com/bamioezequiel/PI-Food-main",
      web: 'https://pi-food-bamio-ezequiel.vercel.app/',     
    },
  ];

  return (
    <div>
      <div className={s.projects_back_container}>
        <NavLink to="/" className={s.projects_back}>
          Volver
        </NavLink>
      </div>

      <div className={s.projects_container}>
        <div className={s.projects_cards}>
        {
          projects.map((p) => <Card data={p} /> )
        }        
        </div>
      </div>
    </div>
  );
}
