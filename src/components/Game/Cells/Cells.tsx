import React from "react";
import Cell from "../Cell";
import { countDelay } from "../../../utils/gameCheck";
interface CellsProps {
  board: number[];
  column: number;
  indexAction: number;
  activePlayer: number;
  handleCellClick: any;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Cells: React.FC<CellsProps> = (props) => {
  const { board, column, indexAction, activePlayer, handleCellClick } = props;

  return (
    <>
      {board.map((cell, index) => {
        let cellColor: string = "white";
        let animationColor: string = "";
        let animationName: string = "";
        let delay: number = 0;
        if (cell && index !== indexAction) {
          cellColor = cell === 1 ? "gold" : "red";
        }
        if (index === indexAction) {
          animationName = "ariseAnimation";
          animationColor = cell === 1 ? "gold" : "red";
          delay = countDelay();
        }
        if (index % 7 === column && cell === 0) {
          animationName =
            activePlayer === 2 ? "fallAnimationGold" : "fallAnimationRed";
          delay = countDelay();
        }
        return (
          <Cell
            cellColor={cellColor}
            animationColor={animationColor}
            animationName={animationName}
            handleCellClick={() => handleCellClick(index)}
            delay={delay}
            key={index}
          ></Cell>
        );
      })}
    </>
  );
};
export default Cells;
