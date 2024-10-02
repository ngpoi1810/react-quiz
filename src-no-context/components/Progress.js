import React from "react";

export default function Progress({ maxPoints, numQuestions, index, answer }) {
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
