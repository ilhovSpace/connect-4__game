import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

import { getGameState, findLowestEmptyIndex } from "../../../utils/gameCheck";
import { initializeBoard } from "../../../utils/initialData";
import GameOverMenu from "../GameOverMenu";
import Cells from "../Cells";

import "./Board.css";

interface BoardProps {
  activePlayer: number;
  togglePlayerTurn(): void;
  setActivePlayer: (a: number)=> void;
}

const Board: React.FC<BoardProps> = ({
  activePlayer,
  togglePlayerTurn,
  setActivePlayer,
}) => {
  const [board, setBoard] = useState<number[]>(initializeBoard());
  const [gameOverMenu, setGameOverMenu] = useState<boolean>(false);
  const [winner, setWinner] = useState<string>("");

  const handleCellClick = (index: number): void => {
    const column = index % 7;
    const lowestIndex = findLowestEmptyIndex(board, column);
    if (lowestIndex !== -1) {
      const newBoard = [...board];
      newBoard[lowestIndex] = activePlayer;
      setBoard(newBoard);
      getGameState(newBoard);
      togglePlayerTurn();
    }
  };

  const restartGame = (): void => {
    setBoard(initializeBoard());
    setActivePlayer(1);
    handleCloseGameOverMenu();
  };

  const handleOpenGameOverMenu = (result: string): void => {
    setGameOverMenu(true);
    setWinner(result);
  };

  const handleCloseGameOverMenu = (): void => {
    setGameOverMenu(false);
  };

  useEffect(() => {
    const result = getGameState(board);
    if (result) {
      handleOpenGameOverMenu(result);
    }
  });

  return (
    <div>
      <div className="board">
        <Cells board={board} handleCellClick={handleCellClick} />
        <GameOverMenu
          handleClose={handleCloseGameOverMenu}
          gameOverMenu={gameOverMenu}
          restart={restartGame}
          winner={winner}
        />
      </div>
      <div className="board-action">
        <Button variant="contained" color="primary" onClick={restartGame}>
          Начать заново
        </Button>
      </div>
    </div>
  );
};

export default Board;