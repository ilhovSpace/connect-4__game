import React, { useState } from "react";
import Board from "./Board";

import "./Game.css";

const Game: React.FC = () => {
  const [activePlayer, setActivePlayer] = useState<number>(1);

  const togglePlayerTurn = (): void => {
    const nextPlayer = activePlayer === 1 ? 2 : 1;
    setActivePlayer(nextPlayer);
  };

  return (
    <div className="game">
      <div className="game-info">
        <p>Сейчас ходит:</p>
        <p>Игрок {activePlayer === 1 ? "1 Желтые" : "2 Красные"}</p>
      </div>
      <Board
        activePlayer={activePlayer}
        togglePlayerTurn={togglePlayerTurn}
        setActivePlayer={setActivePlayer}
      />
    </div>
  );
};

export default Game;
