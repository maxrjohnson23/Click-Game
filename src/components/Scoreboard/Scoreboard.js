import React from 'react';
import './Scoreboard.css';

const Scoreboard = (props) => (
    <div className="instructions">
      <h4>Click the tiles to increase
        your score, but don't click the same tile twice!</h4>
      <div class="scores">
        <h2>Score: {props.currentScore} | </h2><h2 id="highScore"><i
          className="fa fa-trophy"/> High score: {props.highScore}</h2>
      </div>
    </div>
);

export default Scoreboard;