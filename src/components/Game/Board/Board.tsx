import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";
import { getGameState, findLowestEmptyIndex } from "../../../utils/gameCheck";
import { initializeBoard } from "../../../utils/initialData";
import GameOverMenu from "../GameOverMenu";
import ModalWindow from "../../ModalWindow";
import Cells from "../Cells";
import useStyles from "./Board.styles";
import { countDelay } from "../../../utils/gameCheck";

interface BoardProps {
  activePlayer: number;
  togglePlayerTurn(): void;
  setActivePlayer: (a: number) => void;
}

const Board: React.FC<BoardProps> = ({
  activePlayer,
  togglePlayerTurn,
  setActivePlayer,
}) => {
  const [board, setBoard] = useState<number[]>(initializeBoard());
  const [gameOverMenu, setGameOverMenu] = useState<boolean>(false);
  const [winner, setWinner] = useState<string>("");
  const [results, setResults] = useState<string[]>([]);
  const [column, setColumn] = useState<any>(null);
  const [indexAction, setIndexAction] = useState<any>(null);
  const classes = useStyles();

  const handleCellClick = (index: number): void => {
    const column = index % 7;
    const lowestIndex = findLowestEmptyIndex(board, column);
    if (lowestIndex !== -1) {
      const newBoard = [...board];
      newBoard[lowestIndex] = activePlayer;
      countDelay("reset");
      setBoard(newBoard);
      getGameState(newBoard);
      togglePlayerTurn();
      setWinner("");
      setColumn(column);
      setIndexAction(lowestIndex);
    }
  };

  const restartGame = (): void => {
    setBoard(initializeBoard());
    setActivePlayer(1);
    handleCloseGameOverMenu();
    setColumn(null);
    setIndexAction(null);
  };

  const handleOpenGameOverMenu = (result: string): void => {
    setGameOverMenu(true);
    setWinner(result);
  };

  const handleCloseGameOverMenu = (): void => {
    setGameOverMenu(false);
  };
  useEffect(() => {
    if (winner.length) {
      const preResult = [...results]
      setResults([winner, ...preResult]);
    }
  },[winner]);

  useEffect(() => {
    const result = getGameState(board);
    if (result) {
      handleOpenGameOverMenu(result);
    }
  });

  return (
    <div>
      <div className={classes.board}>
        <Cells
          board={board}
          column={column}
          indexAction={indexAction}
          handleCellClick={handleCellClick}
          activePlayer={activePlayer}
        />
        <GameOverMenu
          handleClose={handleCloseGameOverMenu}
          gameOverMenu={gameOverMenu}
          restart={restartGame}
          winner={winner}
        />
      </div>
      <div className={classes.action}>
        <div className={classes.wrapper}>
          <Button variant="contained" color="primary" onClick={restartGame}>
            Начать заново
          </Button>
          <Link to="/">
            <Button variant="contained" color="primary">
              Меню
            </Button>
          </Link>
          <ModalWindow buttonName="Результаты" windowTitle="Результаты игр">
            {!results.length ? (
              <div>Пока нет результатов</div>
            ) : (
              <ul>
                {results.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            )}
          </ModalWindow>
        </div>
      </div>
    </div>
  );
};

export default Board;
