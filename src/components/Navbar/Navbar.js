import React from 'react';

const Navbar = (props) => (
    <nav>
        <h1>Current score: {props.currentScore}</h1>
        <h1>High score: {props.highScore}</h1>
    </nav>
);

export default Navbar;