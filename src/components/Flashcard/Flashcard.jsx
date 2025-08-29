import React from "react";
import s from "./Flashcard.module.css";
import { FaLightbulb, FaCheckCircle, FaCode } from "react-icons/fa";

const Flashcard = ({
  question,
  answer,
  hint,
  example,
  image,
  showAnswer,
  onReveal,
}) => {
  return (
    <div className={s.cardContainer}>
      <div className={`${s.card} ${showAnswer ? s.flipped : ""}`} onClick={!showAnswer ? onReveal : null}>
        {/* Cara frontal */}
        <div className={s.front}>
          <h2 className={s.question}>{question}</h2>
          <button className={s.revealBtn}>
            <span className={s.revealText}>Toca para ver la respuesta</span>
          </button>
        </div>

        {/* Cara trasera */}
        <div className={s.back}>
          <p className={s.answer}>
            <FaCheckCircle className={s.answerIcon} /> {answer}
          </p>
          {hint && (
            <div className={s.detailItem}>
              <FaLightbulb className={s.detailIcon} />
              <p className={s.detailText}>
                <span className={s.detailLabel}>Pista:</span> {hint}
              </p>
            </div>
          )}
          {example && (
            <div className={s.detailItem}>
              <FaCode className={s.detailIcon} />
              <p className={s.detailText}>
                <span className={s.detailLabel}>Ejemplo:</span>
              </p>
              <pre className={s.exampleCode}>
                <code>{example}</code>
              </pre>
            </div>
          )}
          {image && (
            <div className={s.imageContainer}>
              <img src={image} alt="Flashcard visual" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;