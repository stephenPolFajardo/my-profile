import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="container" id="main">
            <span id="turn">Play</span>
            <div class="box" id="box1"></div>
            <div class="box" id="box2"></div>
            <div class="box" id="box3"></div>
            <div class="box" id="box4"></div>
            <div class="box" id="box5"></div>
            <div class="box" id="box6"></div>
            <div class="box" id="box7"></div>
            <div class="box" id="box8"></div>
            <div class="box" id="box9"></div>
        </div>
        <!-- Play Again And Reset All Info -->
        <button onclick="replay()">Play Again</button>
      </header>
    </div>
  );
}

export default App;
