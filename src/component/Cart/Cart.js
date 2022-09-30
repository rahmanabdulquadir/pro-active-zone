import React, { useEffect, useState } from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  for (const element of cart) {
    total = total + element.time;
  }

  const [data, setData] = useState("");
  useEffect(() => {}, [data]);
  const setDataLocalStorage = (brake) => {
    setData(brake);
    localStorage.setItem("value", brake);
  };

  const local = localStorage.getItem("value");
  return (
    <div className="cart-container">
      <div className="personal-detail">
        <h2>Rahman Abdul Quadir</h2>
        <small>Dhaka, Bangladesh</small>
      </div>
      <div className="info-container">
        <div>
          <h1>75kg</h1>
          <h2>weight</h2>
        </div>
        <div>
          <h1>6.1</h1>
          <h2>Height</h2>
        </div>
        <div>
          <h1>25 yrs</h1>
          <h2>Age</h2>
        </div>
      </div>
      <div className="add-break">
        <h2>Add a break</h2>
        <div>
          <div>
            <button>
              <span
                onClick={(brake) => setDataLocalStorage(brake.target.innerText)}
              >
                30s
              </span>
            </button>
            <button>
              <span
                onClick={(brake) => setDataLocalStorage(brake.target.innerText)}
              >
                40s
              </span>
            </button>
            <button>
              <span
                onClick={(brake) => setDataLocalStorage(brake.target.innerText)}
              >
                50s
              </span>
            </button>
            <button>
              <span
                onClick={(brake) => setDataLocalStorage(brake.target.innerText)}
              >
                60s
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* <p>time: {cart.length}min</p> */}
      <h4>Exercise Time: {total} Seconds</h4>
      <h4>Break Time: {local}</h4>

      <div></div>
    </div>
  );
};

export default Cart;
