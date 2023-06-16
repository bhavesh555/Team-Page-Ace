import React from "react"; 
import Services from "./components/Services";
import './App.css';
import {useState, useEffect} from 'react'
import RingLoader from "react-spinners/RingLoader";

function App() {
  const[loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },5000)
  },[])

   return (
    <div>
      {
        loading?
        <RingLoader
        color={'#90EE90'}
        loading={loading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      :
      <Services />

      }
    
    </div>
   )
 
}

export default App;