import React, { useState } from "react";
import s from "./CreateFlashcard.module.css";

const CreateFlashcard = ({ onAddCard, onClose }) => {
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [hint, setHint] = useState("");
  const [example, setExample] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // base64
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question || !answer) return;

    const newCard = {
      id: Date.now(),
      category: category || "General",
      question,
      answer,
      hint: hint || null,
      example: example || null,
      image: image || null,
      difficulty: null,
    };

    onAddCard(newCard);
    onClose();
  };

  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        <h2>Crear Nueva Tarjeta</h2>
        <form onSubmit={handleSubmit} className={s.form}>
          <input
            type="text"
            placeholder="Categoría"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="text"
            placeholder="Pregunta"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Respuesta"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Hint (opcional)"
            value={hint}
            onChange={(e) => setHint(e.target.value)}
          />
          <input
            type="text"
            placeholder="Ejemplo (opcional)"
            value={example}
            onChange={(e) => setExample(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {image && (
            <div className={s.preview}>
              <img src={image} alt="Preview" />
            </div>
          )}
          <div className={s.buttons}>
            <button type="submit">Añadir Tarjeta</button>
            <button type="button" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateFlashcard;
