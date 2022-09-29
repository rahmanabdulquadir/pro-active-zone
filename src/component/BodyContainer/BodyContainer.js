import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import PersonDetails from '../PersonDetailes/PersonDetails';
import './BodyContainer.css'

const BodyContainer = () => {
  const [Cards, setCards] = useState([]);
  const [Time, setTime] = useState([]);
  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setCards(data))
  }, [])
  const handleAddToListBtn = (card) =>{
    console.log(card)
  }
  return (
    <div>
      <div className="body-container">
      <h1>Pro Active Zone</h1>
        <h3>Select Todays Exercise</h3>
      <div className='right-container'>
        {
          Cards.map(card => <Card key={card.id} card={card} handleAddToListBtn={handleAddToListBtn}></Card>)
        }
        
      </div>
      <div className="left-container">
        <PersonDetails></PersonDetails>
      </div>
      </div>
    </div>
  );
};

export default BodyContainer;