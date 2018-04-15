import React from 'react';

const Navbar = (props) => (
    <nav>
        <ul>
          <li>Click Game</li>
          <li>Current score: {props.currentScore}</li>
          <li><i className="fa fa-trophy" /> High score: {props.highScore}</li>
        </ul>
    </nav>
);

export default Navbar;