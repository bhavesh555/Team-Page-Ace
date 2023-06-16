import React from "react"; 
import Services from "./components/Services";
import './App.css';
import {useState, useEffect} from 'react'
import Particles from 'react-particles-js';

function App() {
   return (
    <div className="App">
     <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
      <Services />
    </div>
   )
 
}

export default App;