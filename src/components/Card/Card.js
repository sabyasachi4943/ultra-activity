import React from "react";
import './Card.css'
const Card = (props) => {
  const { id, name, img, time } = props.activity;
  return (
    <div className='card'>
      <img src={img} alt=""></img>
    </div>
  );
};

export default Card;
