import React from "react"; 
import Services from "./components/Services";
import './App.css';
import {useState, useEffect} from 'react'
import ClipLoader from "react-spinners/ClipLoader";

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
        <ClipLoader
        color={'#90EE90'}
        loading={loading}
        cssOverride={override}
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