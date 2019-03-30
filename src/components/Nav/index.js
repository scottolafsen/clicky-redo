import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary nav">
      <ul className="list-inline">
          <li className="list-inline-item">
          <a className="navbar-brand" href="/">
        <h1>ClickyGame</h1>
      </a>
          </li>
          <li className="list-inline-item">
            <h2>{props.gameState}</h2>
          </li>
          <li className="list-inline-item">
            <h3>Score =  {props.score} || Top Score =  {props.highScore}</h3>
          </li>
    </ul> 
    </nav>
  );
}

export default Nav;
