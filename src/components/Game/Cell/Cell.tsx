import React from "react";
import useStyles from "./Cell.styles";

interface CellProps {
  animationColor: string;
  cellColor: string;
  animationName: string;
  delay: number;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleCellClick: () => void;
}

const Cell: React.FC<CellProps> = (props) => {
  const { animationName, handleCellClick } = props;
  const classes = useStyles(props);

  const animation = () => {
    if (animationName === "fallAnimationGold") return classes.fallAnimationGold;
    if (animationName === "fallAnimationRed") return classes.fallAnimationRed;
    if (animationName === "ariseAnimation") return classes.ariseAnimation;
  };

  return (
    <div className={classes.cell} onClick={handleCellClick}>
      {animationName && <div className={animation()}></div>}
    </div>
  );
};

export default Cell;
