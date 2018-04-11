import React, {Component} from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import Navbar from './components/Navbar';

class App extends Component {
    state = {
        currentScore: 0,
        highScore: 0,
        showLoss: false,
        showWin: false
    };

    determineRoundOutcome = (event) => {
        console.log(event);
        // Check event to see if it was already clicked

        // Update win/loss and scores

        // Show win/loss if necessary
    }

    updateCurrentScore = () => {
        // Increment score and update state
        this.setState({
            currentScore: ++this.currentScore
        });
    }

    updateHighScore = () => {
        // Increment  high score and update state
        this.setState({
            highScore: ++this.highScore
        })
    }

  render() {
    return (
      <div className="App">
          <Navbar currentScore={this.state.currentScore}
                  highScore={this.state.highScore}/>
        <header className="App-header">
            <h1 className="App-title">Click Game</h1>
        </header>
          <GameBoard determineOutcome={this.determineRoundOutcome}/>
      </div>
    );
  }
}

export default App;
