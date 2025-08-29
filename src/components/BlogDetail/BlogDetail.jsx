import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./BlogDetail.module.css";
import { FaArrowLeft } from "react-icons/fa";

// Datos de ejemplo extendidos para el detalle del blog
// En una aplicación real, esta información vendría de una API
const blogPosts = [
  {
    id: 1,
    title: "Guía completa de Spring Boot para principiantes",
    author: "Ezequiel Bamio",
    date: "25 de Julio, 2025",
    image: "https://i.imgur.com/G5y5dE0.jpg",
    content: `
      <p>Spring Boot se ha convertido en el estándar de facto para la creación de aplicaciones Java. Su filosofía de "convención sobre configuración" permite a los desarrolladores comenzar a trabajar en proyectos de manera rápida y eficiente, sin la necesidad de pasar horas configurando cada aspecto del proyecto.</p>
      <p>En este artículo, exploraremos los conceptos fundamentales de Spring Boot, desde la creación de un proyecto con el Spring Initializr hasta la implementación de controladores, servicios y repositorios para interactuar con una base de datos. También cubriremos temas avanzados como la seguridad y el despliegue.</p>
      <h3>¿Por qué elegir Spring Boot?</h3>
      <ul>
        <li><strong>Desarrollo rápido:</strong> Reduce el tiempo de configuración.</li>
        <li><strong>Autoconfiguración:</strong> Configura automáticamente tu aplicación.</li>
        <li><strong>Servidores embebidos:</strong> Incluye Tomcat o Jetty, no necesitas un servidor externo.</li>
        <li><strong>Ecosistema robusto:</strong> Se integra perfectamente con otras herramientas de Spring.</li>
      </ul>
      <p>Ya seas un desarrollador experimentado en Java o un principiante que busca construir aplicaciones empresariales, Spring Boot es una herramienta invaluable. ¡Manos a la obra y comienza a programar tu próxima aplicación!</p>
    `,
  },
  {
    id: 2,
    title: "La importancia del Clean Code en el desarrollo moderno",
    author: "Ezequiel Bamio",
    date: "10 de Agosto, 2025",
    image: "https://i.imgur.com/iR7sKjI.jpg",
    content: `
      <p>En el mundo del desarrollo de software, la velocidad es a menudo prioritaria. Sin embargo, priorizar la velocidad sobre la calidad puede llevar a un código difícil de mantener, propenso a errores y costoso de modificar a largo plazo.</p>
      <p>El Clean Code, o código limpio, es un conjunto de prácticas y principios que buscan mejorar la legibilidad y mantenibilidad del software. Un código limpio es aquel que es fácil de leer, entender y modificar, tanto para ti como para otros desarrolladores.</p>
      <h3>Principios clave del Clean Code</h3>
      <p>Según el libro "Clean Code" de Robert C. Martin, algunos de los principios más importantes incluyen:</p>
      <ol>
        <li><strong>Nombres significativos:</strong> Usa nombres de variables y funciones que revelen su propósito.</li>
        <li><strong>Funciones pequeñas:</strong> Cada función debe hacer una sola cosa y hacerla bien.</li>
        <li><strong>Comentarios concisos:</strong> Los comentarios deben explicar por qué se hace algo, no qué se hace.</li>
      </ol>
      <p>Adoptar estas prácticas no solo mejora la calidad de tu software, sino que también te convierte en un mejor profesional. El tiempo invertido en escribir código limpio se recupera rápidamente en el futuro.</p>
    `,
  },
  // Agrega más posts aquí si lo deseas
];

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Busca el post por ID en el array de datos
  const post = blogPosts.find((p) => p.id.toString() === id);

  if (!post) {
    return <div className={styles.notFound}>Post no encontrado.</div>;
  }

  // Se usa dangerouslySetInnerHTML para renderizar el HTML del contenido
  return (
    <div className={styles.detailContainer}>
      <button className={styles.btnBack} onClick={() => navigate(-1)}>
        <FaArrowLeft /> Volver
      </button>

      <div className={styles.header}>
        <img src={post.image} alt={post.title} className={styles.mainImage} />
      </div>

      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.meta}>
          <span>Por {post.author}</span>
          <span>&bull;</span>
          <span>{post.date}</span>
        </div>

        <div
          className={styles.postContent}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}