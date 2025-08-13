import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDownload
} from "react-icons/fa";
import s from "./AboutMe.module.css";

import profilePic from "../../assets/logo-porfile.jpg";
import cTalentTech from "../../assets/certificado-talent-tech.jpg";
import cHenry from "../../assets/certificado-henry.jpg";
import cEducacionIT from "../../assets/Certificado-Introduccion-a-la-Programacion-EducacionIT.png";
import cCsharp from "../../assets/certificado-udemyCsharp.jpg";

import CV from "../../assets/CV-Bamio-Ezequiel.pdf";

const skillsList = [
  "Java",
  "Spring Boot",
  "JavaScript",
  "Node.js",
  "React",
  "Redux",
  "MySQL / PostgreSQL",
  "MongoDB",
  "HTML / CSS",
  "Git / GitHub",
  "Scrum"
];

const certificates = [
  {
    id: 1,
    name: "Bootcamp Full Stack - Soy Henry",
    description: "Programa intensivo de +700 horas teórico-prácticas en desarrollo Full Stack.",
    link: "https://www.soyhenry.com/",
    img: cHenry
  },
  {
    id: 2,
    name: "Talent Tech - Java Backend Developer",
    description: "Bootcamp intensivo de desarrollo backend con foco en Java.",
    link: "https://talenttech.dev/",
    img: cTalentTech
  }, 
  {
    id: 4,
    name: "Curso Full Stack - Educación IT",
    description: "Formación en desarrollo web Full Stack con tecnologías actuales.",
    link: "https://www.educacionit.com/perfil/ezequiel-bamio-526709/certificado/54677",
    img: cEducacionIT
  },
  {
    id: 3,
    name: "Curso C# - Udemy",
    description: "Curso completo de C# para desarrollo de aplicaciones modernas.",
    link: "https://www.udemy.com/certificate/UC-d8d55b04-9d04-4757-a8cf-42b7d2f8f677/",
    img: cCsharp
  },
];

const projects = [
  {
    name: "EasyStore",
    desc: "Aplicación e-commerce desarrollada con Java y Spring Boot, con frontend React y funcionalidades de carrito, autenticación y administración.",
    github: "https://github.com/bamioezequiel/EasyStoreApp-TechLab"
  }
];

export default function AboutMe() {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [resultMsg, setResultMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const user_name = e.target.user_name.value.trim();
    const user_email = e.target.user_email.value.trim();
    const message = e.target.message.value.trim();

    if (!user_name || !user_email || !message) {
      setResultMsg("Por favor completá todos los campos.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user_email)) {
      setResultMsg("Por favor ingresá un email válido.");
      return;
    }

    setSending(true);
    emailjs
      .sendForm(
        "service_wpm0t5h",
        "template_0r58gnm",
        form.current,
        "DTHHeWy8O3aUMBlDk"
      )
      .then(() => {
        setResultMsg("Mensaje enviado con éxito! Gracias por contactarme.");
        e.target.reset();
      })
      .catch(() => {
        setResultMsg("Error al enviar el mensaje. Por favor, intentá nuevamente.");
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <div className={s.aboutContent}>
      <section className={s.aboutSection} aria-label="Sección Sobre mí">
        <button onClick={() => window.history.back()} className={s.btnBack}>
          ← Volver
        </button>

        <div className={s.container}>
          {/* LEFT */}
          <aside className={s.card}>
            <div className={s.header}>
              <div className={s.avatarWrap}>
                <img src={profilePic} alt="Ezequiel Bamio" className={s.avatar} />
              </div>

              <div className={s.info}>
                <h1 className={s.name}>Ezequiel Bamio</h1>
                <p className={s.role}>Full Stack Developer | Java Backend</p>
                <div className={s.location}>
                  <FaMapMarkerAlt /> Buenos Aires, Argentina
                </div>
              </div>
            </div>

            <p className={s.bio}>
              Desarrollador Full Stack con foco en backend (Java, Spring Boot) y experiencia en React.
              He trabajado en proyectos de e-commerce, sistemas de gestión y aplicaciones web integrando
              autenticación, pagos y paneles administrativos. Apasionado por crear soluciones eficientes,
              escalables y de calidad, con experiencia en metodologías ágiles.
            </p>

            <div className={s.btnGroup}>
              <a className={s.btnPrimary} href={CV} download>
                <FaDownload /> Descargar CV
              </a>
              <a
                className={s.btnGhost}
                href="https://calendly.com/dev-bamioezequiel"
                target="_blank"
                rel="noreferrer"
              >
                📅 Agendar reunión
              </a>
            </div>

            <div className={s.socials}>
              <a
                href="https://linkedin.com/in/ezequielbamio"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/bamioezequiel"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>

            <div className={s.quickStats}>
              <div className={s.stat}>
                <div className={s.statNum}>54+</div>
                <div className={s.statLabel}>Proyectos</div>
              </div>
              <div className={s.stat}>
                <div className={s.statNum}>3+</div>
                <div className={s.statLabel}>Años de formación</div>
              </div>
              <div className={s.stat}>
                <div className={s.statNum}>100%</div>
                <div className={s.statLabel}>Compromiso</div>
              </div>
            </div>
          </aside>

          {/* RIGHT */}
          <main className={s.main}>
            <section className={s.block}>
              <h2 className={s.blockTitle}>Habilidades</h2>
              <p className={s.blockSubtitle}>Tecnologías con las que trabajo.</p>
              <div className={s.badges}>
                {skillsList.map((skill, idx) => (
                  <span key={idx} className={s.badge}>
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section className={s.block}>
              <h2 className={s.blockTitle}>Certificados</h2>
              <p className={s.blockSubtitle}>Mis logros y capacitaciones.</p>
              <div className={s.certificatesGrid}>
                {certificates.map(({ id, name, link, img }) => (
                  <a 
                    key={id} 
                    href={link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className={s.certificateLink}
                    aria-label={`Ir a la página oficial de ${name}`}
                  >
                    <img 
                      src={img} 
                      alt={`Certificado de ${name}`} 
                      className={s.certificateImg} 
                      loading="lazy"
                    />
                  </a>
                ))}
              </div>
            </section>


            <section className={s.block}>
              <h2 className={s.blockTitle}>Últimos Proyectos</h2>
              <ul className={s.projects}>
                {projects.map((p, idx) => (
                  <li key={idx} className={s.projectItem}>
                    <a href={p.github} target="_blank" rel="noreferrer">
                      <FaGithub /> <strong>{p.name}</strong>
                    </a>
                    <p>{p.desc}</p>
                  </li>
                ))}
              </ul>
            </section>
          </main>
        </div>
      </section>

      <section className={s.contactSection}>
        <div className={s.contactContainer}>
          {/* IZQUIERDA */}
          <div className={s.contactFormWrapper}>
            <h2 className={s.blockTitle}>Envíame un mensaje</h2>
            <form ref={form} className={s.contactForm} onSubmit={sendEmail}>
              <div className={s.contactFormGroup}>
                <input type="text" name="user_name" placeholder="Tu nombre" required />
              </div>
              <div className={s.contactFormGroup}>
                <input type="email" name="user_email" placeholder="Tu email" required />
              </div>
              <div className={s.contactFormGroup}>
                <textarea name="message" placeholder="Tu mensaje" required></textarea>
              </div>
              <button type="submit" disabled={sending}>
                {sending ? "Enviando..." : "Enviar mensaje"}
              </button>
              {resultMsg && <p>{resultMsg}</p>}
            </form>
          </div>

          {/* DERECHA */}
          <div className={s.contactInfo}>
            <h3>Contacto directo</h3>
            <div className={s.contactLinks}>
              <a
                href="mailto:dev.bamioezequiel@gmail.com"
                className={s.contactLink}
              >
                <FaEnvelope /> dev.bamioezequiel@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/ezequielbamio"
                target="_blank"
                rel="noreferrer"
                className={s.contactLink}
              >
                <FaLinkedin /> /ezequielbamio
              </a>
              <a
                href="https://github.com/bamioezequiel"
                target="_blank"
                rel="noreferrer"
                className={s.contactLink}
              >
                <FaGithub /> /bamioezequiel
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
