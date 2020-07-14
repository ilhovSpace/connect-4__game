import React from "react";

import "./Cells.css";

interface CellsProps {
  board: number[];
  handleCellClick: (index: number) => void;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Cells: React.FC<CellsProps> = ({ board, handleCellClick }) => {
  return (
    <>
      {board.map((cell, index) => {
        let color = "";
        if (cell) {
          color = cell === 1 ? " player-one" : " player-two";
        }
        return (
          <div
            className={"cell" + color}
            onClick={() => handleCellClick(index)}
            key={index}
          ></div>
        );
      })}
    </>
  );
};
export default Cells;
