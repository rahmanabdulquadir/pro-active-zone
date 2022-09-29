import React from "react";
import './Card.css'

const Card = (props) => {
  const { name, img, age, time } = props.card;
  return (
    <div>
      <div className="card-container">
        <img src={img} alt="" />
        <h3>Name: {name}</h3>
        <h4>For Age: {age}</h4>
        <p>Time: {time}s</p>
        <button onClick={() => props.handleAddToListBtn(props.card)} className="btn-card">Add to list</button>
      </div>
    </div>
  );
};

export default Card;
