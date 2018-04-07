import React, {Component} from 'react';
import './App.css';
import GameBoard from './components/GameBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1 className="App-title">Click Game</h1>
        </header>
          <GameBoard/>
      </div>
    );
  }
}

export default App;
