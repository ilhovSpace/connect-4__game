import React from "react";
import Button from "@material-ui/core/Button";

import About from "../About";
import "./Home.css";

interface HomeProps {
  newGame(): void;
}

const Home: React.FC<HomeProps> = (props) => {
  const { newGame } = props;
  return (
    <div className="home">
      <div className="home-header">Собери 4-ку</div>
      <div className="home-menu">
        <div className="home-menu__items">
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
