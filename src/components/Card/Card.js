import React, {Component} from "react";
import "./Card.css";

class Card extends Component {
    state = {
        clicked: false
    };

    handleClick = () => {
        // Call parent component's shuffle method
        this.props.shuffle();

        this.setState({
            clicked: true
        });
    };

    render() {
        return (
            <div className="card">
                <img src={this.props.image} onClick={this.handleClick}
                     alt={this.props.name}/>
            </div>
        );
    }
}

export default Card;