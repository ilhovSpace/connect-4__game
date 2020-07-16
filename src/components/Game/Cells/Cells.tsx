import React from "react";
import clsx from 'clsx';
import useStyles from './Cell.styles'

interface CellsProps {
  board: number[];
  handleCellClick: (index: number) => void;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Cells: React.FC<CellsProps> = ({ board, handleCellClick }) => {
  const classes = useStyles()
  return (
    <>
      {board.map((cell, index) => {
        let color = ''
        if(cell){ 
          color = cell === 1 ? classes.playerOne : classes.playerTwo
        }
        return (
          <div className={clsx(classes.cell, color)}
            onClick={() => handleCellClick(index)}
            key={index}
          ></div>
        );
      })}
    </>
  );
};
export default Cells;
