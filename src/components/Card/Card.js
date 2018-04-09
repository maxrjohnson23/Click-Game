import React, {Component} from "react";
import "./Card.css";

class Card extends Component {
    state = {
        clicked: false
    };

    handleClick = () => {
        console.log('Before: ' + this.state.clicked);

        this.setState({
            clicked: true
        }, () => console.log('Before: ' + this.state.clicked));
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