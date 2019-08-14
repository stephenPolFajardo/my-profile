import React from "react";
import TicTacToe from "./tictactoe";
import ReactDOM from "react-dom";

import "./styles.css";

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
import React, { Component } from "react";
import TicTacToe from "./tictactoe";

import "./App.css";

function App() extends Component {
  return (
    <div className="App">
      <h1>Start Here</h1>
      <TicTacToe />
    </div>
  );
}

export default App;
