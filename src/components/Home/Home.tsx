import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import useStyles from "./Home.styles";
import ModalWindow from "../ModalWindow";

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.home}>
      <div className={classes.header}>Собери 4-ку</div>
      <div className={classes.menu}>
        <div className={classes.menuItems}>
          <Link to="game">
            <Button variant="contained" color="secondary">
              Новая игра
            </Button>
          </Link>
          <ModalWindow
            buttonName="Правила игры"
            windowTitle="Правила игры Собери 4-ку"
          >
            Ходите по очереди, пока один из игроков не соберет 4 фишки своего
            цвета в ряд — по горизонтали, по вертикали или по диагонали. Если вы
            первым собрали 4 фишки в ряд, вы побеждаете!
          </ModalWindow>
        </div>
      </div>
    </div>
  );
};

export default Home;
