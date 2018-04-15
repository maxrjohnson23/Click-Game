import React from "react";
import "./Tile.css";

const Tile = (props) => (
    <div className="card">
        <img src={`./images/${props.image}`} onClick={props.handleClick}
             alt={props.name}/>
    </div>
);


export default Tile;