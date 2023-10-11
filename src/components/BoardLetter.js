import React, { useEffect, useContext } from "react";
import { AppContext } from "../App";

function Letter({ letterPosition, attemptValue }) {
  const {
    board,
    correctWord,
    currentAttempt,
    setDisabledLetters,
    setCorrectPosLetters,
    setWrongPosLetters,
  } = useContext(AppContext);
  const letter = board[attemptValue][letterPosition];

  const correct = correctWord.toUpperCase()[letterPosition] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);

  const letterState =
    currentAttempt.attempt > attemptValue
      ? correct
        ? "correct"
        : almost
        ? "almost"
        : "error"
      : undefined;

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    } else {
      if (letter !== "" && correct && !almost) {
        setCorrectPosLetters((prev) => [...prev, letter]);
      } else if (letter !== "" && !correct && almost) {
        setWrongPosLetters((prev) => [...prev, letter]);
      }
    }
  }, [currentAttempt.attempt]);

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
}

export default Letter;
