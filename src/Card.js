import React from 'react';
import "./Card.css";
import {useNavigate} from 'react-router-dom';
import image from "./images/gg.jpg"


function Card() {
  const navigate=useNavigate();
  function handleclick(){
    navigate("/secondpage")
  }
  return (
    <div style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", overflow:"hidden",marginTop:'-270px',
    marginLeft:'-75px',height:1000,position:"relative",width:1600}}>
    <div className="transparent-card" >
      <h2 className="card-heading">ParkIt</h2>
      <button className="card-button" onClick={handleclick}>Start</button>
    </div>
    </div>
  );
}

export default Card;
