import React, {Component} from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
            <h1 className="App-title">Click Game</h1>
        </header>
        <GameBoard />
      </div>
    );
  }
}

export default App;
