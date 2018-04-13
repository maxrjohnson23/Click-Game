import React from "react";
import Card from "../Card";
import "./Gameboard.css"


const GameBoard = (props) => (
  <div className="container">
    <div className="gameboard">
      {
        props.tiles.map(card => <Card key={card.id} image={card.image}
                               name={card.name}
                               handleClick={() => props.handleClick(card.id)}/>)
      }
    </div>
  </div>
);


export default GameBoard;