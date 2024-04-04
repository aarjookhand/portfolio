import React from 'react'
import Outline from '../components/Outline'
import Contact from '../components/Contact'

function ContactPage() {
  return (
    <div>
        <div className="oulineContainer">
            <Outline/>
        </div>
        <div className="contentContainer">
            <Contact/>         
        </div>
      
    </div>
  )
}

export default ContactPage
