import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div onClick={() => props.handleClick(props.id)} className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} id={props.id}/>
      </div>
    </div>
  );
}

export default FriendCard;
