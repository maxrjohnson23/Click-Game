import React from "react";
import Tile from "../Tile";
import Scoreboard from "../Scoreboard";
import FlipMove from 'react-flip-move';
import "./Gameboard.css"


const GameBoard = (props) => (
    <div className="gameboard">
      <Scoreboard currentScore={props.currentScore}
                  highScore={props.highScore}/>
      {
        props.tiles.map(tile => <Tile key={tile.name} image={tile.image}
                                      name={tile.name}
                                      handleClick={() => props.handleClick(tile.id)}/>)
      }

    </div>
);


export default GameBoard;