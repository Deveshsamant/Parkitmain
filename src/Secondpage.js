import React from 'react'
import "./Secondpage.css";
import image from "./images/ss.jpg"

function Secondpage() {
  return (
    <div>

    <nav className="navbar">
      <div className="navbar-brand">Park It</div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/about">About</a>
        </li>
        <li className="nav-item">
          <a href="/working">Working</a>
        </li>
      </ul>
    </nav> 
    <img src={image} alt="My Image" className='image'/>
    <button className="book" >Book</button>

    



   
    </div> 
  )
}

export default Secondpage