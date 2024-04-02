import React from 'react'
import Outline from '../components/Outline'
import Projects from '../components/Projects'

function ProjectsPage() {
  return (
    <div>
        <div className="outlineContainer">
            <Outline/>

        </div>
        <div className="contentContainer">
            <Projects/>

        </div>
        
      
    </div>
  )
}

export default ProjectsPage
