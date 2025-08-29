// src/components/FlashcardSection.jsx
import React, { useEffect, useState } from "react";
import s from "./FlashcardSection.module.css";
import Flashcard from "../../components/Flashcard/Flashcard";
import { FaArrowLeft, FaPlus, FaFileExport, FaFileImport, FaEdit, FaTrash, FaTimes, FaCog } from "react-icons/fa";
import FlashcardForm from "../../components/FlashcardForm/FlashcardForm";

const FlashcardSection = () => {
  const [flashcards, setFlashcards] = useState(() => {
    try {
      const storedCards = localStorage.getItem("flashcards");
      return storedCards ? JSON.parse(storedCards) : [
        {
          id: 1,
          category: "Geografía",
          question: "¿Cuál es la capital de Francia?",
          answer: "París",
          hint: "Es la ciudad de la luz",
          example: null,
          image: null,
          difficulty: null,
          history: { hard: 0, medium: 0, easy: 0 },
        },
        {
          id: 2,
          category: "Programación",
          question: "¿Qué es Hoisting en JavaScript?",
          answer: "Elevación de declaraciones al inicio de su contexto",
          hint: "Piensa en variables y funciones",
          example: "console.log(a); var a = 5;",
          image: null,
          difficulty: null,
          history: { hard: 0, medium: 0, easy: 0 },
        },
      ];
    } catch (error) {
      console.error("Error al cargar tarjetas de localStorage", error);
      return [];
    }
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardToEdit, setCardToEdit] = useState(null);
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    localStorage.setItem("flashcards", JSON.stringify(flashcards));
  }, [flashcards]);

  const currentCard = flashcards[currentIndex];

  const handleNextCard = (updatedCards) => {
    const weightedIndices = [];
    updatedCards.forEach((c, i) => {
      const weight = (c.difficulty === "hard" || c.difficulty === null) ? 3 : (c.difficulty === "medium" ? 2 : 1);
      for (let j = 0; j < weight; j++) {
        weightedIndices.push(i);
      }
    });

    const filtered = weightedIndices.filter((i) => i !== currentIndex);
    const nextIndex = filtered.length > 0 ? filtered[Math.floor(Math.random() * filtered.length)] : currentIndex;

    setCurrentIndex(nextIndex);
    setShowAnswer(false);
  };

  const handleEvaluate = (level) => {
    const updated = [...flashcards];
    const card = updated[currentIndex];
    card.difficulty = level;
    card.history[level] = (card.history[level] || 0) + 1;
    setFlashcards(updated);
    handleNextCard(updated);
  };

  const saveFlashcard = (formData) => {
    let updatedCards;
    if (formData.id) {
      updatedCards = flashcards.map((card) =>
        card.id === formData.id ? { ...card, ...formData } : card
      );
    } else {
      const newCard = {
        ...formData,
        id: flashcards.length > 0 ? Math.max(...flashcards.map(c => c.id)) + 1 : 1,
        difficulty: null,
        history: { hard: 0, medium: 0, easy: 0 },
      };
      updatedCards = [...flashcards, newCard];
    }
    setFlashcards(updatedCards);
    setIsModalOpen(false);
    setCardToEdit(null);
  };

  const deleteFlashcard = (id) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar esta tarjeta?")) {
      const updatedCards = flashcards.filter(c => c.id !== id);
      setFlashcards(updatedCards);
      if (currentIndex >= updatedCards.length) {
        setCurrentIndex(Math.max(0, updatedCards.length - 1));
      }
    }
  };

  const total = flashcards.length;
  const counts = flashcards.reduce(
    (acc, c) => {
      if (c.difficulty === "hard") acc.hard++;
      else if (c.difficulty === "medium") acc.medium++;
      else if (c.difficulty === "easy") acc.easy++;
      return acc;
    },
    { hard: 0, medium: 0, easy: 0 }
  );

  const leftCards = flashcards.filter(
    (c) => c.difficulty === null || c.difficulty === "hard" || c.difficulty === "medium"
  );
  const rightCards = flashcards.filter((c) => c.difficulty === "easy");

  const handleSelectCard = (id) => {
    const index = flashcards.findIndex((c) => c.id === id);
    if (index !== -1) {
      setCurrentIndex(index);
      setShowAnswer(false);
    }
  };

  const handleImport = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedCards = JSON.parse(e.target.result);
          if (Array.isArray(importedCards)) {
            const newCards = importedCards.map(c => ({
              ...c,
              id: flashcards.length > 0 ? Math.max(...flashcards.map(card => card.id)) + 1 : 1,
              history: c.history || { hard: 0, medium: 0, easy: 0 }
            }));
            setFlashcards([...flashcards, ...newCards]);
            alert("¡Tarjetas importadas con éxito!");
          } else {
            alert("Error: El archivo debe contener un array de tarjetas.");
          }
        } catch (error) {
          alert("Error al procesar el archivo. Asegúrate de que es un JSON válido.");
          console.error("Error importing file:", error);
        }
      };
      reader.readAsText(file);
    }
  };

  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(flashcards, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "flashcards.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <section className={s.container}>
      {/* Panel izquierdo */}
      <aside className={s.sidebar}>
        <h3>Pendientes / Difícil / Medio</h3>
        <ul>
          {leftCards.map((card) => (
            <li
              key={card.id}
              onClick={() => handleSelectCard(card.id)}
              className={`${s.listItem} ${flashcards[currentIndex]?.id === card.id ? s.active : ""}`}
            >
              <div className={s.cardInfo}>
                <span className={s.category}>{card.category}</span>
                <span className={`${s.level} ${s[card.difficulty] || ""}`}>
                  {card.difficulty ? (card.difficulty === "hard" ? "Difícil" : "Medio") : "Sin nivel"}
                </span>
                <div className={s.miniHistory}>
                  {Object.entries(card.history).map(([level, count]) => (
                    <span
                      key={level}
                      className={`${s.miniDot} ${s[level]}`}
                      title={`${level}: ${count}`}
                    >
                      {count}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </aside>

      {/* Contenido principal */}
      <main className={s.main}>
        <header className={s.header}>
          <button className={s.btnBack} onClick={() => window.history.back()}>
            <FaArrowLeft /> Volver
          </button>
          <h1 className={s.title}>Flashcards Interactivas</h1>
          <p className={s.subtitle}>Repasa, evalúa y mejora tu memorización</p>
          <div className={s.headerActions}>
            <button className={s.dashboardBtn} onClick={() => setShowDashboard(!showDashboard)}>
              {showDashboard ? <FaTimes /> : <FaCog />} {showDashboard ? "Cerrar Dashboard" : "Gestionar Tarjetas"}
            </button>
          </div>
          
          <div className={s.progressBar}>
            <div className={s.progressHard} style={{ width: `${(counts.hard / total) * 100}%` }} />
            <div className={s.progressMedium} style={{ width: `${(counts.medium / total) * 100}%` }} />
            <div className={s.progressEasy} style={{ width: `${(counts.easy / total) * 100}%` }} />
          </div>
          <p className={s.progressText}>
            Tarjeta {currentIndex + 1} de {flashcards.length}
          </p>
        </header>

        {showDashboard ? (
          <div className={s.flashcardDashboard}>
            <div className={s.dashboardHeader}>
              <h2>Dashboard de Tarjetas</h2>
              <div className={s.dashboardActions}>
                <button className={s.addBtn} onClick={() => { setCardToEdit(null); setIsModalOpen(true); }}>
                  <FaPlus /> Añadir
                </button>
                <label className={s.fileInputLabel}>
                  <FaFileImport /> Importar
                  <input type="file" accept=".json" onChange={handleImport} style={{ display: "none" }} />
                </label>
                <button className={s.exportBtn} onClick={handleExport}>
                  <FaFileExport /> Exportar
                </button>
              </div>
            </div>
            <ul className={s.dashboardList}>
              {flashcards.map((card) => (
                <li key={card.id} className={s.dashboardListItem}>
                  <div className={s.dashboardCardContent}>
                    <span className={s.dashboardCardCategory}>{card.category}</span>
                    <span className={s.dashboardCardQuestion}>{card.question}</span>
                  </div>
                  <div className={s.dashboardCardActions}>
                    <button onClick={() => { setCardToEdit(card); setIsModalOpen(true); }} title="Editar"><FaEdit /></button>
                    <button onClick={() => deleteFlashcard(card.id)} title="Eliminar"><FaTrash /></button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <>
            <div className={s.flashcardGrid}>
              {currentCard && (
                <Flashcard
                  key={currentCard.id}
                  question={currentCard.question}
                  answer={currentCard.answer}
                  hint={currentCard.hint}
                  example={currentCard.example}
                  image={currentCard.image}
                  showAnswer={showAnswer}
                  onReveal={() => setShowAnswer(true)}
                  history={currentCard.history}
                />
              )}
            </div>
            {showAnswer && (
              <div className={s.controls}>
                <button className={`${s.btn} ${s.hard}`} onClick={() => handleEvaluate("hard")}>
                  ❌ Difícil
                </button>
                <button className={`${s.btn} ${s.medium}`} onClick={() => handleEvaluate("medium")}>
                  ⚡ Medio
                </button>
                <button className={`${s.btn} ${s.easy}`} onClick={() => handleEvaluate("easy")}>
                  ✅ Fácil
                </button>
              </div>
            )}
          </>
        )}
      </main>

      {/* Panel derecho */}
      <aside className={s.sidebar}>
        <h3>Aprendidas / Fácil</h3>
        <ul>
          {rightCards.map((card) => (
            <li
              key={card.id}
              onClick={() => handleSelectCard(card.id)}
              className={`${s.listItem} ${flashcards[currentIndex]?.id === card.id ? s.active : ""}`}
            >
              <div className={s.cardInfo}>
                <span className={s.category}>{card.category}</span>
                <span className={`${s.level} ${s[card.difficulty]}`}>Fácil</span>
                <div className={s.miniHistory}>
                  {Object.entries(card.history).map(([level, count]) => (
                    <span
                      key={level}
                      className={`${s.miniDot} ${s[level]}`}
                      title={`${level}: ${count}`}
                    >
                      {count}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </aside>

      <FlashcardForm
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setCardToEdit(null);
        }}
        onSave={saveFlashcard}
        card={cardToEdit}
      />
    </section>
  );
};

export default FlashcardSection;