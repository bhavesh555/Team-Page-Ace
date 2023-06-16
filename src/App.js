import React from "react"; 
import Services from "./components/Services";
import './App.css';
import {useState, useEffect} from 'react'
import Particles from 'react-particles-js';
import tsParticles from 'react-tsparticles';

function App() {
   return (
    <div className="App">
      <Services />
    </div>
   )
 
}

export default App;