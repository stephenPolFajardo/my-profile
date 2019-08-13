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
      playerOne: 0,
      playerTwo: 0,
      tokenPlace: []
    };
  }

  clicked(box) {
    alert(this.gameState.tokenPlace);
    this.moveSpan = document.getElementById("tokenPlace");
    if (this.gameState.gameEnded || this.gameState.gameLocked)return
    if (this.gameState.board[box.dataset.set] === "") {
      this.gameState.board[box.dataset.set] = this.gameState.turn;
      this.cell = document.createElement('div');
      this.cell.setAttribute('className', 'cellBlock');
      this.br = document.createElement('br');
      box.innerText = this.gameState.turn;
      this.gameState.turn = this.gameState.turn === "X" ? "O" : "X";
      this.gameState.totalMoves++;
      if (this.gameState.turn === "X") {
        document.getElementById("turn").innerHTML = "Player 1 Is your turn now";
        let p2 = "Player 2 move cell " + box.id;
        this.gameState.tokenPlace.push(p2);
        this.cell.innerHTML = p2;
      } else {
        document.getElementById("turn").innerHTML = "Player 2 Is your turn now";
        let p2 = "Player 1 move cell " + box.id;
        this.gameState.tokenPlace.push(p2);
        this.cell.innerHTML = p2;
      }
      this.moveSpan.append(this.cell);
      this.cell.append(this.br);
    }


    var result = this.checkWinner();
    if (result === "X") {
      this.gameState.gameEnded = true;
      document.getElementById("turn").innerHTML = "Congratulations";
      this.setState({
        winner: "X",
        winnerLine: "Player 1 is win!"
      });
      // for (const [index, value] of this.gameState.tokenPlace.entries()) {
      //   this.historList.push(<li key={index}>{value}</li>);
      // }
      this.gameState.playerOne ++;
      document.getElementById("play1").innerHTML = "Player 1 Score: " + this.gameState.playerOne;
    } else if (result === "O") {
      this.gameState.gameEnded = true;
      document.getElementById("turn").innerHTML = "Congratulations";
      this.setState({
        winner: "O",
        winnerLine: "Player 2 is win!"
      });
      // for (const [index, value] of this.gameState.tokenPlace.entries()) {
      //   this.historList.push(<li key={index}>{value}</li>);
      // }
      this.gameState.playerTwo ++;
      document.getElementById("play2").innerHTML = "Player 2 Score: " + this.gameState.playerTwo;
    } else if (result === "draw") {
      this.gameState.gameEnded = true;
      document.getElementById("turn").innerHTML = "Play Again";
      this.setState({
        winner: "draw",
        winnerLine: "This match is draw"
      });
      // for (const [index, value] of this.gameState.tokenPlace.entries()) {
      //   this.historList.push(<li key={index}>{value}</li>);
      // }
    }
    return
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
    this.gameState.tokenPlace.push(document.getElementById("status").innerHTML);
    this.gameState.gameEnded = false;
    this.gameState.totalMoves = 0;
    const countDiv = document.querySelectorAll("div.box");
    document.getElementById("status").innerHTML = "";
    document.getElementById("tokenPlace").innerHTML = "";
    if(this.gameState.turn === 'O'){
      document.getElementById("turn").innerHTML = "The First Turn is Player 2";
    }else if(this.gameState.turn === 'X') {
      document.getElementById("turn").innerHTML = "The First Turn is Player 1";
    }
    for (let n = 0; countDiv.length; n++) {
      this.gameState.board[n] = "";
      countDiv[n].innerHTML = "";
    }
    this.gameState({
      turn: "X",
      board: Array(9).fill(""),
      tokenPlace: []
    });
  }

  render() {
    return (
      <div id="game">
        <div id="play1"></div>
        <div id="play2"></div>
        <div id="status">{this.state.winnerLine}</div>
        <div id="head" />
        <span id="turn">Play</span>
        <div id="board" onClick={e => this.clicked(e.target)}>
          <div id="a:1" className="box" data-set="0">
            {this.gameState.board[0]}
          </div>
          <div id="b:1" className="box" data-set="1">
            {this.gameState.board[1]}
          </div>
          <div id="c:1" className="box" data-set="2">
            {this.gameState.board[2]}
          </div>
          <div id="a:2" className="box" data-set="3">
            {this.gameState.board[3]}
          </div>
          <div id="b:2" className="box" data-set="4">
            {this.gameState.board[4]}
          </div>
          <div id="c:2" className="box" data-set="5">
            {this.gameState.board[5]}
          </div>
          <div id="a:3" className="box" data-set="6">
            {this.gameState.board[6]}
          </div>
          <div id="b:3" className="box" data-set="7">
            {this.gameState.board[7]}
          </div>
          <div id="c:3" className="box" data-set="8">
            {this.gameState.board[8]}
          </div>
        </div>
        <button onClick={() => this.replayGame()}>Play Again</button>
        <div id="tokenPlace">
          
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
export default App;
ReactDOM.render(<App />, rootElement);
