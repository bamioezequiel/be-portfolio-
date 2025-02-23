import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../Cards/Card";
import s from "./Projects.module.css";

export default function Projects() {
  const projects = [
    {
      "title": "🐶 Peluquería Canina",
      "description": "Aplicación de escritorio en Java para gestionar clientes de una peluquería canina. Permite registrar, modificar y eliminar datos de mascotas y sus dueños, utilizando JPA y MySQL. ✂️🐾",
      "img": "https://imgur.com/jm0zpWr.png",
      "github": "https://github.com/bamioezequiel/PeluqueriaCanina",
      "web": ""
    },
    {
      "title": "🔐 Sistema de Login con Roles",
      "description": "Aplicación de escritorio en Java con un sistema de autenticación y gestión de usuarios. Implementa JPA y MySQL, permitiendo la administración de usuarios con roles 'admin' y 'user'. El administrador puede gestionar usuarios (CRUD), mientras que el usuario común solo puede visualizar datos. 🛠️👤",
      "img": "https://imgur.com/tFmLPsG.png",
      "github": "https://github.com/bamioezequiel/LoginSystem",
      "web": ""
    },    
    {
      "title": "🚗 Agencia de Automóviles",
      "description": "Aplicación de escritorio en Java para gestionar la venta de automóviles. Permite registrar, modificar y eliminar datos de los vehículos disponibles, utilizando JPA y MySQL. 🏎️🔧",
      "img": "https://imgur.com/cACz8Nh.png",
      "github": "https://github.com/bamioezequiel/AutomovilApp",
      "web": ""
    },     
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
