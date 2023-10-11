import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyValue, bigKey, disabled, correct, almost }) {
  const { gameOver, deleteLetter, selectLetter, enterLetter } =
    useContext(AppContext);

  const chooseLetter = () => {
    if (gameOver.gameOver) return;
    if (keyValue === "ENTER") {
      enterLetter();
    } else if (keyValue === "DELETE") {
      deleteLetter();
    } else {
      selectLetter(keyValue);
    }
  };

  return (
    <div
      className="key"
      id={
        bigKey
          ? "big"
          : (disabled && "error") ||
            (correct && "correct") ||
            (almost && "almost")
      }
      onClick={chooseLetter}
    >
      {keyValue}
    </div>
  );
}

export default Key;
