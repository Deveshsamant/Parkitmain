import logo from './logo.svg';
import './App.css';

import React, { Component }  from 'react';
import Card from "./Card"
import Working from "./Working"
import About from "./About"

import { Routes, Route } from 'react-router-dom';
import Secondpage from './Secondpage';

function App() {
  return (
    <div  >
  <Routes>
    <Route path="/" element={<Card/>}/>
    <Route path="/secondpage" element={<Secondpage/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/working" element={<Working/>}/>
  </Routes>

   
    </div>
  );
}

export default App;
