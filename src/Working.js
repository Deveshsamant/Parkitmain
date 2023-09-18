import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Working.css'; 
import image from "./images/ss.png";
import imagee from "./images/pps.png";
import imageee from "./images/3.png";
import imag from "./images/dur.png";
function Working() {
  const navigate=useNavigate();
  function handleclick(){
    navigate("/secondpage")
  }
  return (
    <div>
      <div className='ss'>
        <h1 className='dd'> Working</h1>
      </div>
      
    <div className="about">
    
    
      
      <section className="section">
        <h1 className="aa">1.Vehicle Arrival:</h1>
        <p>When a vehicle arrives at the parking facility, it approaches the entrance.</p>
      </section>
      

      <section className="section">
        <h2>2.Entrance Barrier:</h2>
        <li>At the entrance, there is a barrier or gate controlled by the parking management system.</li>
        <li>The system uses various technologies such as sensors, RFID cards, or license plate recognition to identify the vehicle.</li>
        <li>If the vehicle is authorized and there are available parking spaces, the barrier opens, allowing the vehicle to enter.</li>
      </section>

      <img src={image} alt="My Image" className='small-image '/>


      <section className="section">
        <h2>3.Parking Space Allocation:</h2>
        <p>The system assigns an available parking space to the vehicle. This can be done through automated allocation algorithms or user selection, depending on the system's design.</p>
        
      </section>
      <img src={imageee} alt="My Image" className='small-image '/>
     

      <section className="section">
        <h2>4.User Parking:</h2>
        <p1>The driver proceeds to the assigned parking space and parks the vehicle.</p1>
      </section>

      <section className="section">
        <h2>5.Payment :</h2>
        <p1>To exit the parking facility, the user needs to pay for the parking duration.</p1>
      </section>
      <img src={imagee} alt="My Image" className='small-image '/>

      <section className="section">
        <h2>6.Payment Confirmation:</h2>
        <li>After the user makes the payment, the system verifies it.</li>
        <li>If the payment is successful, it records the transaction and updates the payment status for the specific parking space.</li>
      </section>

      <section className="section">
        <h2>7.Parking Duration Monitoring:</h2>
        <li>The system continuously monitors the parked vehicle's duration.</li>
        <li>This information is used to calculate parking fees accurately.</li>
      </section>
      <img src={imag} alt="My Image" className='small-image '/>

      <section className="section">
        <h2>8.Exit Barrier:</h2>
        <li>When the user is ready to leave, they approach the exit barrier.</li>
        <li>Similar to the entrance, the exit barrier uses technology to identify the vehicle.</li>
        <li>If the payment has been verified, the barrier opens, allowing the vehicle to exit.</li>
      </section>
      
      
    </div>

    <button className="card-button" onClick={handleclick}>Back</button>
    

    </div>
  );
}

export default Working;