import React from 'react';
import {useNavigate} from 'react-router-dom';
import myImage from './images/ss.jpg';
import myImagew from './images/gg1.png';
import myImageq from './images/aaaaaa.jpg';
import './About.css'; 

function About() {
  const navigate=useNavigate();
  function handleclick(){
    navigate("/secondpage")
  }
  return (
    <div>
      <div className='ss'>
        <h1 className='sda'>About</h1>
      </div>
    <div className="about">
      <section className="section">
        <h1 className="aa">Smart Car Parking Management System</h1>
        <img src={myImage} alt="My Image" className='small-image '/>
        <p>Welcome to "Parkit" Smart Car Parking Management System! We're dedicated to revolutionizing the way you experience parking, making it smarter, efficient, and hassle-free.</p>
      </section>
      

      <section className="section">
        <h2>Our Mission</h2>
        <p>At "Parkit", our mission is to transform the parking industry by leveraging cutting-edge technology to enhance user convenience, optimize space utilization, and contribute to a more sustainable future. We believe that efficient parking management can make a significant difference in urban mobility.</p>
      </section>

      <section className="section">
        <h2>Key Features</h2>
        <li>Smart Parking: Find available parking spaces quickly with real-time sensors and smart algorithms.</li>
        <li>Contactless Payment: Enjoy secure and convenient payment options.</li>
        <li>Analytics and Insights: Gain valuable data-driven insights into parking patterns.</li>
        <li>Reservations: Reserve parking spots in advance for guaranteed availability.</li>
        
      </section>
      <img src={myImagew} alt="My Image" className='small-image '/>

      <section className="section">
        <h2>Our Team</h2>
        <li>Devesh Samant</li>
        <li>Ayush Saklani</li>
        <li>Devanshu Rawat</li>
      </section>

      <section className="section">
        <h2>Contact Us</h2>
        <p>We value your feedback and questions. Reach out to us anytime; we're here to assist you. Feel free to contact us at "yourparkit@gmail.com".</p>
      </section>

      <section className="section">
        <h2>Privacy and Security</h2>
        <p>We take the privacy and security of your data seriously. Rest assured that your information is protected.</p>
      </section>
      <img src={myImageq} alt="My Imageq" className='small-image '/>
      
    </div>

    <button className="card-button" onClick={handleclick}>Back</button>
    

    </div>
  );
}

export default About;
