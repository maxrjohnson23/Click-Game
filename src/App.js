import React, {Component} from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import Navbar from './components/Navbar';
import data from "./data";

class App extends Component {

  state = {
    currentScore: 0,
    highScore: 0,
    showLoss: false,
    showWin: false,
    gameTiles: data.map(d => {
      d.clicked = false;
      return d;
    }),
    displayBanner: false
  };

  shuffledTiles(input) {
    // Shuffle copied array
    let shuffledArray = [...input];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    console.log("Shuffled:"  +shuffledArray);
    return shuffledArray;
  };

  handleTileClick = (tileId) => {
    console.log(tileId);
    console.log(this.state.gameTiles);

    const copyTiles = [...this.state.gameTiles];

    // Check event to see if it was already clicked
    let currentTile = copyTiles.find(tile => tile.id === tileId);
    // Update win/loss and scores
    if(currentTile.clicked) {
      console.log('Resetting');
      this.endGameAndReset();
    } else {
      currentTile.clicked = true;
      this.setState({
        currentScore: this.state.currentScore + 1,
        gameTiles: this.shuffledTiles(copyTiles)
      });
    }
  };

  endGameAndReset() {
    this.updateHighScore();
    this.setCurrentScore(0);
    const resetData = this.state.gameTiles.map(t =>  {
      t.clicked = false;
      return t;
    });
    debugger;
    this.setState({
      gameTiles: resetData
    })
  }

  setCurrentScore = (newScore) => {
    // Increment score and update state
    this.setState({
      currentScore: newScore
    });
  }

  updateHighScore = () => {
    // Increment  high score and update state
    if(this.state.currentScore > this.state.highScore)
    this.setState({
      highScore: this.state.currentScore
    })
  };

  render() {
    return (
      <div className="App">
        <Navbar currentScore={this.state.currentScore}
                highScore={this.state.highScore}/>
        <header className="App-header">
          <h1 className="App-title">Click Game</h1>
        </header>
        <GameBoard tiles={this.state.gameTiles} handleClick={this.handleTileClick}/>
      </div>
    );
  }
}

export default App;

