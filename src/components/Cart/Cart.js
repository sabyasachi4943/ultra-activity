import React, { useState } from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  let total = 0;
  for (const activity of cart) {
    total = total + activity.time;
  }

  const [breaktime, setBreaktime] = useState(localStorage.getItem("breaktime"));
  const [isShown, setIsShown] = useState(false);

  // This function is called when the blue button gets clicked
  const showToast = () => {
    setIsShown(true);

    // automatically hide the toast after 5 seconds
    // your can set a shorter/longer time if you want
    setTimeout(() => {
      setIsShown(false);
    }, 3000);
  };

  const updateTime = (number) => {
    localStorage.setItem('breaktime', JSON.stringify(number));
    setBreaktime(number);
  }

  return (
    <div className="cart">
      <h3>About Me</h3>
      <p>working out is my daily routine</p>
      <button>72 KG weight</button> <br />
      <button>5.8ft Height</button> <br />
      <button>22yrs Age</button>
      <div>
        <h5>Add a break</h5>
        <button onClick={() => updateTime(20)}>20s</button>
        <button onClick={() => updateTime(30)}>30s</button>
        <button onClick={() => updateTime(40)}>40s</button>
        <button onClick={() => updateTime(50)}>50s</button>
        <button onClick={() => updateTime(60)}>60s</button>
      </div>
      <p>Exercise Time: {total} seconds</p>
      <p>total activity: {cart.length}</p>
      <p className="break">Break time: {breaktime} seconds</p>
      <div className="container">
        {/* This button is used to show the toast */}
        <button className="button" onClick={showToast}>
          Activity Completed
        </button>

        {/* Implement our toast here */}
        {isShown && (
          <div className="my-toast">
            <span className="my-toast__icon">i</span>
            <span>Activity Completed</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
