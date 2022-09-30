import React, { useEffect, useState } from "react";
import "./Cart.css";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import {  faLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  const toastify = () => {
    toast("You have completed your activity!", { position: "top-center" });
  };
  return (
    <div className="cart-container">
      <div className="personal-detail">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv_SIu1QdDJEXx9DNXxgsLTA3ELnOoTHp-fQ1f3-aT_ky2Fhkw8pY5AnOMhrceNL1PsR0&usqp=CAU" alt="" />
       <div>
       <h2>Rahman Abdul Quadir</h2>
       <FontAwesomeIcon style={{marginRight: '7px'}} icon={faLocation}></FontAwesomeIcon>
        <small>Dhaka, Bangladesh</small>
       </div>
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
        <h2 style={{textAlign: 'start'}}>Add a break</h2>
        <div>
          <div className="break-btn-container">
            <button className="break-btn">
              <span
                onClick={(brake) => setDataLocalStorage(brake.target.innerText)}
              >
                30s
              </span>
            </button>
            <button className="break-btn">
              <span
                onClick={(brake) => setDataLocalStorage(brake.target.innerText)}
              >
                40s
              </span>
            </button>
            <button className="break-btn">
              <span
                onClick={(brake) => setDataLocalStorage(brake.target.innerText)}
              >
                50s
              </span>
            </button>
            <button className="break-btn">
              <span
                onClick={(brake) => setDataLocalStorage(brake.target.innerText)}
              >
                60s
              </span>
            </button>
          </div>
        </div>
      </div>
      <h1 style={{textAlign: 'start'}}>Exercise Details</h1>
      <div className="ex-time-container">
        <h2>Exercise Time: {total} Seconds</h2>
      </div>
      <div className="break-time-container">
        <h2>Break Time: {local}</h2>
      </div>

      <div>
        <button className="btn-activity" onClick={toastify}>
          Activity Completed
        </button>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Cart;
