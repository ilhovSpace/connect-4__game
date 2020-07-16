import React from "react";

import Button from "@material-ui/core/Button";
import useStyles from './Home.styles'
import About from "../About";


interface HomeProps {
  newGame(): void;
}

const Home: React.FC<HomeProps> = (props) => {
  const classes = useStyles()
  const { newGame } = props;
  return (
    <div className={classes.home}>
      <div className={classes.header}>Собери 4-ку</div>
      <div className={classes.menu}>
        <div className={classes.menuItems}>
          <Button variant="contained" color="secondary" onClick={newGame}>
            Новая игра
          </Button>
          <About />
        </div>
      </div>
    </div>
  );
};

export default Home;
