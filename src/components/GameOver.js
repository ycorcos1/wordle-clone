import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const { gameOver, currentAttempt, correctWord } = useContext(AppContext);

  // function resetGame() {
  //   setBoard(
  //     ["", "", "", "", ""],
  //     ["", "", "", "", ""],
  //     ["", "", "", "", ""],
  //     ["", "", "", "", ""],
  //     ["", "", "", "", ""],
  //     ["", "", "", "", ""]
  //   );
  //   setGameOver({
  //     gameOver: false,
  //     guessedWord: false,
  //   });
  //   setCurrentAttempt({ attempt: 0, letterPosition: 0 });
  //   setDisabledLetters([]);
  // }

  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord ? "You correctly guessed the word" : "You failed"}
      </h3>
      <h1>Correct Word: {correctWord.toUpperCase(0)}</h1>
      {gameOver.guessedWord && (
        <h3>You guessed in {currentAttempt.attempt} attempts</h3>
      )}
      {/* <button onClick={resetGame}>Play Again</button> */}
    </div>
  );
}

export default GameOver;
