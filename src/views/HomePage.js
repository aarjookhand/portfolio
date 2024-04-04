import React from 'react'
import Outline from '../components/Outline'
import Home from '../components/Home'
import '../styles/outline.css'

function HomePage() {
  return (
    <div>
        <div className="oulineContainer">
            <Outline/>
        </div>
        <div className="homeContainer">
            <Home/>         
        </div>
      
    </div>
  )
}

export default HomePage
