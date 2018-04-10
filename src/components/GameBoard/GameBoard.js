import React, {Component} from 'react';
import Card from "../Card";
import "./Gameboard.css"
import data from "./data"

class GameBoard extends Component {
    state = {
        gameTiles: data
    };

    onClickShuffleTiles = () => {
        // Shuffle array
        let shuffledArray = this.state.gameTiles;

        console.log('Shuffling');
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        this.setState({
            gameTiles: shuffledArray
        });
    };


    render() {
        return (
            <div className="container">
                <div className="gameboard" onClick={this.onClickShuffleTiles}>
                    {
                        this.state.gameTiles.map(card => <Card key={card.id}
                                                               image={card.image}
                                                               name={card.name}/>)
                    }
                </div>
            </div>

        )
    };
}

export default GameBoard;