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
    gameTiles: data.map(tile => {
      tile.previouslyClicked = false;
      return tile;
    }),
  };

  shuffleTiles(tiles) {
    // Shuffle array in place
    let shuffledArray = tiles;

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  handleTileClick = (tileId) => {
    const gameTiles = [...this.state.gameTiles];

    let clickedTile = gameTiles.find(tile => tile.id === tileId);

    // Determine outcome
    if(clickedTile.previouslyClicked) {
      this.endGameAndReset();
    } else {
      clickedTile.clicked = true;
      this.setState({
        currentScore: this.state.currentScore + 1,
        gameTiles: this.shuffleTiles(gameTiles)
      });
    }
  };

  endGameAndReset() {
    this.updateHighScore();
    const resetData = this.state.gameTiles.map(t =>  {
      t.previouslyClicked = false;
      return t;
    });
    this.setState({
      currentScore: 0,
      gameTiles: resetData
    })
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

