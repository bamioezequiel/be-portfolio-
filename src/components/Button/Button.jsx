import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import s from "./Button.module.css";
import { FaArrowLeft } from "react-icons/fa";


export default function Button() {
    const navigate = useNavigate();
  
  return (
    <button
        onClick={() => navigate(-1)}
        className={s.btnBack}
        aria-label="Volver a la página anterior"
    >
        <FaArrowLeft className={s.iconBack} /> Volver
    </button>
  );
}