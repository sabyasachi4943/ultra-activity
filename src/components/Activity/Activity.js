import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
import "./Activity.css";

const Activity = () => {
  const [activities, setActivities] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("activity.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  const handleAddToCart = (activity) => {
    console.log(activity);
    const newCart = [...cart, activity];
    setCart(newCart);
  };

  return (
    <div>
      <h1>Ultra activity</h1>
      <div className="activity-container">
        <div className="activity-card">
          {activities.map((activity) => (
            <Card key={activity.id} activity={activity} handleAddToCart={ handleAddToCart}></Card>
          ))}
        </div>
        <div className="activity-cart">
            <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Activity;
