import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

interface ModalWindowProps {
  buttonName: string;
  windowTitle: string;
  children: any;
}

const ModalWindow: React.FC<ModalWindowProps> = ({
  buttonName,
  windowTitle,
  children,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        {buttonName}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">{windowTitle}</DialogTitle>
        <DialogContent>
          <div id="alert-dialog-description">{children}</div>
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

export default ModalWindow;
