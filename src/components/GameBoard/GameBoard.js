import React from 'react';
import Card from "../Card";

const GameBoard = () => (
    <div>
        {
            cards.map(card => <Card a={card.a} b={card.b} c={card.c}/>)
        }
    </div>

)

export default GameBoard;