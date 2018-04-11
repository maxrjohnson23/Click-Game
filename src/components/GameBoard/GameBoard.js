import React from 'react';
import Card from "../Card";
import "./Gameboard.css"
import data from "./data"


const GameBoard = (props) => (
    <div className="container">
        <div className="gameboard">
            {
                data.map(card => <Card key={card.id} image={card.image}
                                       name={card.name}
                                       determineOutcome={() => props.determineOutcome(card.id)}/>)
            }
        </div>
    </div>

)

export default GameBoard;