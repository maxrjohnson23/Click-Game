import React from "react";
import "./Card.css";

const Card = (props) => (
    <div className="card">
        <img src={props.image} onClick={props.determineOutcome}
             alt={props.name}/>
    </div>
);


export default Card;