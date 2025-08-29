import React from 'react';
import styles from './Services.module.css';
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Cloud,
  Workflow,
  Layers,
  Rocket,
  Palette,
  Shield,
  MessageCircle,
  ArrowRight,
  Zap,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code />,
      title: "Desarrollo Fullstack a Medida",
      description:
        "Construyo aplicaciones completas, desde interfaces dinámicas hasta backends robustos. Escalabilidad y rendimiento en cada línea de código.",
    },
    {
      icon: <Database />,
      title: "Arquitectura de Datos",
      description:
        "Bases de datos seguras, optimizadas y listas para crecer con tu negocio. MongoDB, PostgreSQL y más.",
    },
    {
      icon: <Globe />,
      title: "APIs y Conectividad",
      description:
        "APIs RESTful y GraphQL con integraciones seguras y rápidas. Conecta tu sistema con cualquier plataforma.",
    },
    {
      icon: <Smartphone />,
      title: "Diseño Web Responsive",
      description:
        "Webs que se ven perfectas en cualquier dispositivo. Interfaces limpias, modernas y enfocadas en el usuario.",
    },
    {
      icon: <Palette />,
      title: "UI/UX Intuitivo",
      description:
        "Transformo tus prototipos en experiencias reales, con animaciones, transiciones fluidas y usabilidad impecable.",
    },
    {
      icon: <Cloud />,
      title: "Deploy & Escalabilidad",
      description:
        "Despliegue en AWS, Vercel o Render. Automatización CI/CD para actualizaciones rápidas y sin downtime.",
    },
    {
      icon: <Shield />,
      title: "Seguridad Avanzada",
      description:
        "Autenticación, encriptación y control de roles. Protejo tu proyecto como si fuera mío.",
    },
    {
      icon: <Workflow />,
      title: "Metodología Ágil",
      description:
        "Comunicación clara, entregas continuas y feedback constante. Tu visión se convierte en producto paso a paso.",
    },
  ];

  const processSteps = [
    { step: "01", title: "Conectamos", text: "Una llamada inicial para entender tu idea, objetivos y visión." },
    { step: "02", title: "Definimos", text: "Plan de acción, tecnologías, cronograma y presupuesto transparente." },
    { step: "03", title: "Creamos", text: "Desarrollo ágil con entregas continuas y tu feedback en cada fase." },
    { step: "04", title: "Lanzamos", text: "Deploy seguro, soporte inicial y escalamiento a medida que creces." },
  ];

  const packages = [
    {
      icon: <Layers />,
      name: "Presencia Digital",
      desc: "Landing page de una sección, optimizada para captar leads y mostrar tu propuesta de valor.",
    },
    {
      icon: <Rocket />,
      name: "Expansión Empresarial",
      desc: "Sitio web completo con varias páginas, panel de administración y funcionalidades personalizadas.",
    },
    {
      icon: <Code />,
      name: "Innovación a Medida",
      desc: "Aplicaciones web fullstack avanzadas, con autenticación, dashboards y lógica de negocio compleja.",
    },
  ];

  const techs = [
    { name: "React", icon: "devicon-react-original" },
    { name: "Node.js", icon: "devicon-nodejs-plain" },
    { name: "Next.js", icon: "devicon-nextjs-original" },
    { name: "TypeScript", icon: "devicon-typescript-plain" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
    { name: "JavaScript", icon: "devicon-javascript-plain" },
    { name: "MongoDB", icon: "devicon-mongodb-plain" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
    { name: "Git", icon: "devicon-git-plain" },
    { name: "Docker", icon: "devicon-docker-plain" },
  ];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.mainContent}>

        {/* Hero */}
        <section className={styles.heroSection}>
          <span className={styles.heroTag}><Zap size={16}/> Desarrollador Freelance</span>
          <h1 className={styles.heroTitle}>
            Tu Proyecto Digital, <span className={styles.heroGradient}>Hecho Realidad</span>.
          </h1>
          <p className={styles.heroDescription}>
            Transformo ideas audaces en soluciones web robustas y escalables. Mi objetivo: que tu negocio destaque en lo digital.
          </p>
          <a href="#contact" className={styles.heroCtaButton}>
            <span>Hablemos de tu visión</span>
            <ArrowRight size={20} />
          </a>
        </section>

        {/* Servicios */}
        <section id="services" className={styles.section}>
          <h2 className={styles.sectionTitle}>Servicios Freelance</h2>
          <p className={styles.sectionSubtitle}>
            Soluciones profesionales, enfocadas en resultados y hechas a medida para cada cliente.
          </p>
          <div className={styles.servicesGrid}>
            {services.map((service, i) => (
              <div key={i} className={styles.serviceCard}>
                <div className={styles.iconWrapper}>
                  <div className={styles.icon}>{service.icon}</div>
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Proceso */}
        <section id="process" className={styles.section}>
          <h2 className={styles.sectionTitle}>Proceso de Trabajo</h2>
          <p className={styles.sectionSubtitle}>
            De la idea al producto final, con transparencia total en cada paso.
          </p>
          <div className={styles.processSteps}>
            {processSteps.map((step, i) => (
              <div key={i} className={styles.processStepCard}>
                <div className={styles.stepNumber}>{step.step}</div>
                <h3 className={styles.processStepTitle}>{step.title}</h3>
                <p className={styles.processStepDescription}>{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Paquetes */}
        <section id="packages" className={styles.section}>
          <h2 className={styles.sectionTitle}>Planes de Desarrollo</h2>
          <p className={styles.sectionSubtitle}>
            Elige el plan que se adapta a tu proyecto: desde lo esencial hasta lo más avanzado.
          </p>
          <div className={styles.packagesGrid}>
            {packages.map((pkg, i) => (
              <div key={i} className={styles.packageCard}>
                <div className={styles.packageCardContent}>
                  <div className={styles.packageIcon}>{pkg.icon}</div>
                  <h3 className={styles.cardTitle}>{pkg.name}</h3>
                  <p className={styles.cardDescription}>{pkg.desc}</p>
                </div>
                <div className={styles.packageCardFooter}>
                  <button className={styles.packageButton}>Saber más</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tecnologías */}
        <section id="technologies" className={styles.section}>
          <h2 className={styles.sectionTitle}>Stack Tecnológico</h2>
          <p className={styles.sectionSubtitle}>
            Herramientas modernas que garantizan calidad, eficiencia y futuro para tu producto.
          </p>
          <div className={styles.techsList}>
            {techs.map((tech, i) => (
              <div key={i} className={styles.techBadge}>
                <i className={tech.icon} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <section id="contact" className={styles.finalCtaSection}>
          <div className={styles.finalCtaContent}>
            <h2 className={styles.finalCtaTitle}>¿Listo para dar el siguiente paso?</h2>
            <p className={styles.finalCtaDescription}>
              Agenda una consulta gratuita y recibí una respuesta en menos de 24hs.
            </p>
            <a href="#" className={styles.finalCtaButton}>
              <MessageCircle size={24} />
              <span>Agenda tu consulta</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
