import React from "react";
import TicTacToe from "./tictactoe";
import ReactDOM from "react-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Start Here</h1>
      <TicTacToe />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
