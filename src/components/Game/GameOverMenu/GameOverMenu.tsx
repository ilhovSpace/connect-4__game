import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

interface GameOverMenu {
  restart(): void;
  gameOverMenu: boolean;
  winner: string;
}

const GameOverMenu: React.FC<GameOverMenu> = ({
  gameOverMenu,
  restart,
  winner,
}) => {
  return (
    <>
      <Dialog open={gameOverMenu}>
        <DialogTitle>{"Собери 4"}</DialogTitle>
        <DialogContent>
          <p>{winner}</p>
          <div style={{ textAlign: "center" }}>
            <Button variant="contained" color="primary" onClick={restart}>
              Начать заново
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GameOverMenu;
