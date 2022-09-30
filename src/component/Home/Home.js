import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import './Home.css'
const Home = () => {
  const [cards, setCards] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setCards(data))
  }, [])
  const handleAddToListBtn = (card) =>{
    const newCart = [...cart, card];
    setCart(newCart);
    console.log(cart)
    // console.log(newCart)
  }
  return (
    <div>
      <div className='home-container'>
        <div className="right-container">
            {
              cards.map(card => <Card key={card.id} card={card} handleAddToListBtn={handleAddToListBtn}></Card>)
            }
        </div>
        <div className="left-container">
           <Cart cart={cart}></Cart>
           
        </div>
      </div>
    </div>
  );
};

export default Home;