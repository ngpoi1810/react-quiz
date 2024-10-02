import React from "react";
import { useQuiz } from "../contexts/QuizContext";

export default function Progress() {
  const { maxPoints, numQuestions, index, answer } = useQuiz();

  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>0</strong>/{maxPoints}
      </p>
    </header>
  );
}
