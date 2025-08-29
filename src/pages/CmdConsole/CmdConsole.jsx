import React, { useState, useRef, useEffect } from "react";
import s from "./CmdConsole.module.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

export default function CmdConsole() {
  const [history] = useState([
    "Bienvenido a la consola de juegos.",
    "⚠️ Esta sección está actualmente en construcción. Próximamente se agregarán funcionalidades.",
  ]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current?.blur();
  }, []);

  return (
    <div className={s.cmdContainer}>
      <Button />

      <div className={s.console}>
        <div className={s.output}>
          {history.map((line, i) => (
            <div key={i} className={s.line}>
              {line}
            </div>
          ))}
        </div>

        <form className={s.inputForm}>
          <span className={s.prompt}>&gt;&nbsp;</span>
          <input
            ref={inputRef}
            type="text"
            disabled
            className={s.input}
            aria-label="Consola de comandos deshabilitada"
            placeholder="Consola en construcción..."
          />
        </form>
      </div>
    </div>
  );
}
