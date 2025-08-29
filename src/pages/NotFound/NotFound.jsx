import React from "react";
import { Link } from "react-router-dom";
import s from "./NotFound.module.css";

export default function NotFound() {
  return (
    <section className={s.notFoundSection}>
      <div className={s.container}>
        <h1 className={s.errorCode}>404</h1>
        <h2 className={s.errorMessage}>Página no encontrada</h2>
        <p className={s.errorDescription}>
          Ups... parece que te perdiste. La página que buscás no existe o fue movida.
        </p>
        <Link to="/" className={s.homeButton}>
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
