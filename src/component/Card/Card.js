import React from 'react';
import './Card.css'
const Card = ({card, handleAddToListBtn}) => {
  const { name, img, age, time } = card;
  return (
    <div>
      
      <div className="card-container">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h4>For Age: {age}</h4>
      <p>Time: {time}s</p>
      <button
        onClick={() => handleAddToListBtn(card)}
        className="btn-card"
      >
        Add to list
      </button>
    </div>
    </div>
  );
};

export default Card;