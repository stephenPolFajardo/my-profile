import React from "react";
import TicTacToe from "./tictactoe";
import ReactDOM from 'react-dom';
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Start Here</h1>
      <TicTacToe />
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('root'));
