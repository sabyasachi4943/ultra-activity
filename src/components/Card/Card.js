import React from "react";
import './Card.css'
const Card = (props) => {
  const { id, name, img, time } = props.activity;
  return (
    <div className='card'>
      <img src={img} alt=""></img>
      <div className="activity-info">
        <p className="activity-id">{id}</p>
        <p className="activity-name">{name}</p>
        <p>Activity required time: { time} seconds</p>
      </div>
      <button className="btn-activity">
        <p>Add to List</p>
      </button>

    </div>
  );
};

export default Card;
