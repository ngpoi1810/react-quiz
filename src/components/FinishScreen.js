import React from "react";
import { useQuiz } from "../contexts/QuizContext";

export default function FinishScreen() {
  const { points, highscore, maxPoints, dispatch } = useQuiz();
  const pointPercentage = (points / maxPoints) * 100;
  let emoji;
  if (pointPercentage === 100) emoji = "🥇";
  if (pointPercentage >= 80 && pointPercentage < 100) emoji = "🥈";
  if (pointPercentage >= 50 && pointPercentage < 80) emoji = "🥉";
  if (pointPercentage >= 0 && pointPercentage < 50) emoji = "🙂";
  if (pointPercentage === 0) emoji = "😏";
  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPoints} ({Math.ceil(pointPercentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}
