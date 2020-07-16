import React, { useState } from "react";
import Home from "./components/Home";
import Game from "./components/Game";
import useStyles from './App.styles'



const App: React.FC = () => {
  const [game, setGame] = useState<boolean>(false);
  const classes = useStyles()

  const startNewGame = (): void => {
    setGame(true);
  };

  return (
    <div className={classes.root}>
      {game ? <Game /> : <Home newGame={startNewGame} />}
    </div>
  );
};

export default App;
