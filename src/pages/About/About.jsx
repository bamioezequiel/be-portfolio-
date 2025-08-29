import React, { useRef, useState, useCallback } from "react";
import emailjs from "emailjs-com";
import Button from "../../components/Button/Button";

import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";
import s from "./About.module.css";

const SKILLS_LIST = [
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
  "Scrum",
];

const CERTIFICATES = [
  {
    id: 1,
    name: "Bootcamp Full Stack - Soy Henry",
    description: "Programa intensivo de +700 horas teórico-prácticas en desarrollo Full Stack.",
    link: "https://www.soyhenry.com/",
    img: "/certificates/certificado-henry.webp",
  },
  {
    id: 2,
    name: "Talent Tech - Java Backend Developer",
    description: "Bootcamp intensivo de desarrollo backend con foco en Java.",
    link: "https://talenttech.dev/",
    img: "/certificates/certificado-talent-tech.webp",
  },
  {
    id: 4,
    name: "Curso Full Stack - Educación IT",
    description: "Formación en desarrollo web Full Stack con tecnologías actuales.",
    link: "https://www.educacionit.com/perfil/ezequiel-bamio-526709/certificado/54677",
    img: "/certificates/Certificado-Introduccion-a-la-Programacion-EducacionIT.webp",
  },
  {
    id: 3,
    name: "Curso C# - Udemy",
    description: "Curso completo de C# para desarrollo de aplicaciones modernas.",
    link: "https://www.udemy.com/certificate/UC-d8d55b04-9d04-4757-a8cf-42b7d2f8f677/",
    img: "/certificates/certificado-udemyCsharp.webp",
  },
];

const PROJECTS = [
  {
    name: "EasyStore",
    desc: "Aplicación e-commerce desarrollada con Java y Spring Boot, con frontend React y funcionalidades de carrito, autenticación y administración.",
    github: "https://github.com/bamioezequiel/EasyStoreApp-TechLab",
  },
];

const isEmailValid = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default function AboutMe() {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [resultMsg, setResultMsg] = useState("");

  const sendEmail = useCallback(async (e) => {
    e.preventDefault();
    setResultMsg("");

    const { user_name, user_email, message } = e.target.elements;

    if (!user_name.value.trim() || !user_email.value.trim() || !message.value.trim()) {
      setResultMsg("Por favor completá todos los campos.");
      return;
    }

    if (!isEmailValid(user_email.value.trim())) {
      setResultMsg("Por favor ingresá un email válido.");
      return;
    }

    setSending(true);
    try {
      await emailjs.sendForm(
        "service_wpm0t5h",
        "template_0r58gnm",
        form.current,
        "DTHHeWy8O3aUMBlDk"
      );
      setResultMsg("Mensaje enviado con éxito! Gracias por contactarme.");
      form.current.reset();
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      setResultMsg("Error al enviar el mensaje. Por favor, intentá nuevamente.");
    } finally {
      setSending(false);
    }
  }, []);

  return (
    <div className={s.aboutContent}>

      <section className={s.aboutSection} aria-label="Sección Sobre mí">
      <Button />
        

        <div className={s.container}>
          {/* LEFT */}
          <aside className={s.card}>
            <div className={s.header}>
              <div className={s.avatarWrap}>
                <img
                  src="/images/logo-porfile.webp"
                  alt="Ezequiel Bamio"
                  className={s.avatar}
                  loading="eager"
                />
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
              Desarrollador Full Stack con foco en backend (Java, Spring Boot) y experiencia en React. He trabajado en proyectos de e-commerce, sistemas de gestión y aplicaciones web integrando autenticación, pagos y paneles administrativos. Apasionado por crear soluciones eficientes, escalables y de calidad, con experiencia en metodologías ágiles.
            </p>

            <div className={s.btnGroup}>
               <a className={s.btnPrimary} href="/CV-Bamio-Ezequiel.pdf" download="CV-Bamio-Ezequiel.pdf">
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
              <a href="https://linkedin.com/in/ezequielbamio" target="_blank" rel="noreferrer" aria-label="Perfil de LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/bamioezequiel" target="_blank" rel="noreferrer" aria-label="Perfil de GitHub">
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
            <section className={s.block} aria-labelledby="skills-heading">
              <h2 id="skills-heading" className={s.blockTitle}>Habilidades</h2>
              <p className={s.blockSubtitle}>Tecnologías con las que trabajo.</p>
              <div className={s.badges}>
                {SKILLS_LIST.map((skill, idx) => (
                  <span key={idx} className={s.badge}>
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section className={s.block} aria-labelledby="certs-heading">
              <h2 id="certs-heading" className={s.blockTitle}>Certificados</h2>
              <p className={s.blockSubtitle}>Mis logros y capacitaciones.</p>
              <div className={s.certificatesGrid}>
                {CERTIFICATES.map(({ id, name, link, img }) => (
                  <a
                    key={id}
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className={s.certificateLink}
                    aria-label={`Ver certificado de ${name}`}
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

            <section className={s.block} aria-labelledby="projects-heading">
              <h2 id="projects-heading" className={s.blockTitle}>Últimos Proyectos</h2>
              <ul className={s.projects}>
                {PROJECTS.map((p, idx) => (
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

      <section className={s.contactSection} aria-label="Sección de contacto">
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
              {resultMsg && <p className={resultMsg.startsWith("Error") ? s.errorMsg : s.successMsg}>{resultMsg}</p>}
            </form>
          </div>

          {/* DERECHA */}
          <div className={s.contactInfo}>
            <h3>Contacto directo</h3>
            <div className={s.contactLinks}>
              <a
                href="mailto:dev.bamioezequiel@gmail.com"
                className={s.contactLink}
                aria-label="Enviar correo electrónico a dev.bamioezequiel@gmail.com"
              >
                <FaEnvelope /> dev.bamioezequiel@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/ezequielbamio"
                target="_blank"
                rel="noreferrer"
                className={s.contactLink}
                aria-label="Visitar perfil de LinkedIn"
              >
                <FaLinkedin /> /ezequielbamio
              </a>
              <a
                href="https://github.com/bamioezequiel"
                target="_blank"
                rel="noreferrer"
                className={s.contactLink}
                aria-label="Visitar perfil de GitHub"
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