// src/components/FlashcardForm/FlashcardForm.jsx
import React, { useState, useEffect } from "react";
import s from "./FlashcardForm.module.css";
import { FaTimes } from "react-icons/fa";

const FlashcardForm = ({ isOpen, onClose, onSave, card }) => {
  const [formData, setFormData] = useState({
    category: "",
    question: "",
    answer: "",
    hint: "",
    example: "",
    image: "",
  });

  useEffect(() => {
    if (card) setFormData(card);
  }, [card]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        <button className={s.closeBtn} onClick={onClose}>
          <FaTimes />
        </button>
        <h2>{card ? "Editar Tarjeta" : "Nueva Tarjeta"}</h2>
        <form onSubmit={handleSubmit} className={s.form}>
          <label>
            Categoría
            <input
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Pregunta
            <textarea
              name="question"
              value={formData.question}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Respuesta
            <textarea
              name="answer"
              value={formData.answer}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Hint
            <input name="hint" value={formData.hint} onChange={handleChange} />
          </label>
          <label>
            Ejemplo
            <input
              name="example"
              value={formData.example}
              onChange={handleChange}
            />
          </label>
          <label>
            URL de Imagen
            <input name="image" value={formData.image} onChange={handleChange} />
          </label>
          <button type="submit" className={s.saveBtn}>
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default FlashcardForm;
