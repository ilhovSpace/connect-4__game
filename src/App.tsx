import React, { useState } from "react";
import Home from "./components/Home";
import Game from "./components/Game";

import "./App.css";

const App: React.FC = () => {
  const [game, setGame] = useState<boolean>(false);

  const startNewGame = (): void => {
    setGame(true);
  };

  return (
    <div className="container">
      {game ? <Game /> : <Home newGame={startNewGame} />}
    </div>
  );
};

export default App;
