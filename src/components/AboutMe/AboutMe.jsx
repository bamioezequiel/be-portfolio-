import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa"; // Ícono de usuario
import s from "./AboutMe.module.css";

export default function AboutMe() {
    return (
    <div>
      <div className={s.about_back_container}>
              <NavLink to="/" className={s.about_back}>
                Volver
              </NavLink>
        </div>
        <div className={s.about}>
        <div className={s.about_header}>
                    <h1>¿Quién soy? 👨‍💻</h1>
                </div>
                <div className={s.about_text}>
                    <p>
                        ¡Hola! Soy <strong>Ezequiel Bamio</strong> 👋, un <strong>desarrollador backend</strong> con pasión por la programación y la tecnología. Desde mis inicios en la <strong>UTN</strong> 🏫, aprendí fundamentos sólidos en lenguajes como <strong>C</strong> y <strong>C#</strong> 💻, además de trabajar con bases de datos como <strong>SQL Server</strong> 📊.
                    </p>
                    <p>
                        Tras graduarme en <strong>SoyHenry</strong> 🎓, profundicé mis conocimientos en <strong>JavaScript</strong>, <strong>React</strong>, <strong>Node.js</strong>, <strong>Express</strong> y <strong>MongoDB</strong> 🔧. Esto me permitió adquirir una visión completa del desarrollo de aplicaciones web, tanto en el frontend como en el backend.
                    </p>
                    <p>
                        Aunque me he aventurado en varios lenguajes de programación, el que realmente me cautivó fue <strong>Java</strong> ☕. Actualmente me sigo capacitando en él, porque me encanta su robustez y su capacidad para crear aplicaciones eficientes y escalables.
                    </p>
                    <p>
                        Además de mis conocimientos técnicos, me esfuerzo por mejorar mis <strong>habilidades blandas</strong> 🧠. Soy una persona <strong>proactiva</strong>, con buena capacidad de <strong>resolución de problemas</strong> 🔍 y <strong>trabajo en equipo</strong> 🤝. Me encanta enfrentar desafíos y aprender de cada experiencia.
                    </p>
                    <p>
                        La <strong>programación</strong> es más que un trabajo para mí, es una verdadera <strong>pasión</strong> 🔥. Estoy siempre abierto a aprender nuevas tecnologías y lenguajes, porque cada nuevo desafío es una oportunidad para crecer y mejorar 💪.
                    </p>
                    <p>
                        Busco proyectos en los que pueda aplicar mis conocimientos, <strong>aprender</strong> cosas nuevas y seguir creciendo como profesional 🚀. Si estás buscando a alguien apasionado por resolver problemas y crear soluciones innovadoras, ¡no dudes en contactarme! 📬
                    </p>
                </div>

        <div className={s.about_tech}>
          <h3>🚀 Tecnologías clave:</h3>
          <ul>
            <li>Java</li>
            <li>Spring Boot</li>   
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>React</li>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>       
      </div>
    </div>
  );
}
