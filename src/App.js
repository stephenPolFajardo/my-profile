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
      totalMoves: 0,
      tokenPlace: []
    };
    this.historList = [];
  }

  clicked(box) {
    if (this.gameState.gameEnded || this.gameState.gameLocked) return;
    if (this.gameState.board[box.dataset.set] === "") {
      this.gameState.board[box.dataset.set] = this.gameState.turn;
      box.innerText = this.gameState.turn;
      this.gameState.turn = this.gameState.turn === "X" ? "O" : "X";
      this.gameState.totalMoves++;

      if (this.gameState.turn === "X") {
        document.getElementById("turn").innerHTML = "Player 1 Is your turn now";
        let p2 = "Player 2 move " + box.id;
        this.gameState.tokenPlace.push(p2);
      } else {
        document.getElementById("turn").innerHTML = "Player 2 Is your turn now";
        let p2 = "Player 1 move " + box.id;
        this.gameState.tokenPlace.push(p2);
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
      for (const [index, value] of this.gameState.tokenPlace.entries()) {
        this.historList.push(<li key={index}>{value}</li>);
      }
    } else if (result === "O") {
      this.gameState.gameEnded = true;
      document.getElementById("turn").innerHTML = "Congratulations";
      this.setState({
        winner: "O",
        winnerLine: "Player 2 is win!"
      });
      for (const [index, value] of this.gameState.tokenPlace.entries()) {
        this.historList.push(<li key={index}>{value}</li>);
      }
    } else if (result === "draw") {
      this.gameState.gameEnded = true;
      document.getElementById("turn").innerHTML = "Play Again";
      this.setState({
        winner: "draw",
        winnerLine: "This match is draw"
      });
      for (const [index, value] of this.gameState.tokenPlace.entries()) {
        this.historList.push(<li key={index}>{value}</li>);
      }
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
          <div id="0" className="box" data-set="0" />
          <div id="1" className="box" data-set="1" />
          <div id="2" className="box" data-set="2" />
          <div id="3" className="box" data-set="3" />
          <div id="4" className="box" data-set="4" />
          <div id="5" className="box" data-set="5" />
          <div id="6" className="box" data-set="6" />
          <div id="7" className="box" data-set="7" />
          <div id="8" className="box" data-set="8" />
        </div>
        <button onClick={this.replayGame}>Play Again</button>
        <div id="tokenPlace">
          <ul>{this.historList}</ul>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
export default App;
ReactDOM.render(<App />, rootElement);
