import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const About: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Правила игры
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="alert-dialog-title">
          Правила игры "Собери 4"
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Ходите по очереди, пока один из игроков не соберет 4 фишки своего
            цвета в ряд — по горизонтали, по вертикали или по диагонали. Если вы
            первым собрали 4 фишки в ряд, вы побеждаете!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Понятно
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default About;
