import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      winner: undefined
    };
    this.gameState = {
      turn: "X",
      gameLocked: false,
      gameEnded: false,
      board: Array(9).fill(""),
      totalMoves: 0
    };
  }

  clicked(box) {
    if (this.gameState.gameEnded || this.gameState.gameLocked) return;

    if (this.gameState.board[box.dataset.square] === "") {
      this.gameState.board[box.dataset.square] = this.gameState.turn;
      box.innerText = this.gameState.turn;

      this.gameState.turn = this.gameState.turn === "X" ? "O" : "X";
      this.gameState.totalMoves++;
      if (this.gameState.turn === "X") {
        document.getElementById("turn").innerHTML = "Player 1 Is your turn now";
      } else {
        document.getElementById("turn").innerHTML = "Player 2 Is your turn now";
      }
    }

    var result = this.checkWinner();

    if (result === "X") {
      this.gameState.gameEnded = true;
      document.getElementById("turn").innerHTML = "Congratulations";
      this.setState({
        winner: "X",
        winnerLine: "Player 1 is win!"
      });
    } else if (result === "O") {
      this.gameState.gameEnded = true;
      document.getElementById("turn").innerHTML = "Congratulations";
      this.setState({
        winner: "O",
        winnerLine: "Player 2 is win!"
      });
    } else if (result === "draw") {
      this.gameState.gameEnded = true;
      document.getElementById("turn").innerHTML = "Play Again";
      this.setState({
        winner: "draw",
        winnerLine: "This match is draw"
      });
    }
  }

  checkWinner(square) {
    var moves = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8]
    ];
    var board = this.gameState.board;
    for (let i = 0; i < moves.length; i++) {
      if (
        board[moves[i][0]] === board[moves[i][1]] &&
        board[moves[i][1]] === board[moves[i][2]]
      )
        return board[moves[i][0]];
    }
    if (this.gameState.totalMoves === 9) {
      return "draw";
    }
  }

  replayGame() {
    window.location.reload();
  }

  render() {
    return (
      <div id="game">
        <div id="status">{this.state.winnerLine}</div>
        <div id="head" />
        <span id="turn">Play</span>
        <div id="board" onClick={e => this.clicked(e.target)}>
          <div className="box" data-square="0" />
          <div className="box" data-square="1" />
          <div className="box" data-square="2" />
          <div className="box" data-square="3" />
          <div className="box" data-square="4" />
          <div className="box" data-square="5" />
          <div className="box" data-square="6" />
          <div className="box" data-square="7" />
          <div className="box" data-square="8" />
        </div>
        <button onClick={this.replayGame}>Play Again</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
export default App;
ReactDOM.render(<App />, rootElement);
