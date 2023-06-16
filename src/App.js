import React from "react"; 
import Services from "./components/Services";
import './App.css';
import {useState, useEffect} from 'react'
import Particles from 'react-particles-js';
import tsParticles from 'react-tsparticles';
import ParticleBackground from "./ParticleBackground";

function App() {
   return (
    <div className="App">
      <ParticleBackground />
      <Services />
    </div>
   )
 
}

export default App;