import React from "react";
import './Card.css'
const Card = ({activity, handleAddToCart}) => {
  const { id, name, img, time } = activity;
  return (
    <div className='card'>
      <img src={img} alt=""></img>
      <div className="activity-info">
        <p className="activity-id">{id}</p>
        <p className="activity-name">{name}</p>
        <p>Activity required time: { time} seconds</p>
      </div>
      <button onClick={()=>handleAddToCart(activity)} className="btn-activity">
        <p>Add to List</p>
      </button>

    </div>
  );
};

export default Card;
