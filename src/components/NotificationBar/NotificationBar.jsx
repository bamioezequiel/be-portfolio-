import React, { useState, useEffect } from "react";
import s from "./NotificationBar.module.css";

export default function NotificationBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const visits = parseInt(localStorage.getItem("notificationVisits") || "0", 10);

    if (visits < 2) { // mostrar solo las 2 primeras visitas
      const timerShow = setTimeout(() => setVisible(true), 500);

      const timerHide = setTimeout(() => {
        setVisible(false);
      }, 30000);

      localStorage.setItem("notificationVisits", (visits + 1).toString());

      return () => {
        clearTimeout(timerShow);
        clearTimeout(timerHide);
      };
    }
  }, []);

  const closeNotification = () => {
    setVisible(false);
  };

  return (
    <section
      className={`${s.container} ${visible ? s.visible : ""}`}
      role="region"
      aria-label="Notificación de nuevas funcionalidades"
      aria-live="polite"
    >
      <div className={s.inner}>
        <button
          onClick={closeNotification}
          className={s.closeBtn}
          aria-label="Cerrar notificación"
          title="Cerrar"
        >
          ×
        </button>

        <p className={s.textContainer}>
          🚀 <strong>Nuevas funciones en mi portfolio</strong>
          <br />
          <span className={s.subText}>
            Mejoras constantes para mostrar mi trabajo de forma clara y profesional.
          </span>
          <br />
        </p>
      </div>
    </section>
  );
}
