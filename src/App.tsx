import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Game from "./components/Game";
import useStyles from "./App.styles";

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Game} path="/game" exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
