import React from 'react'
import '../styles/project.css'

export default function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      <div className="project">
        <div className="project-title">Twitter-Clone </div>
        <div className="project-description"> The Express-React Twitter Clone is a full-stack web application that replicates the core functionality of Twitter/ X. Built with Express.js for the backend and React.js for the frontend, the project demonstrates implementation of key features such as user authentication, posting tweets, following other users, liking and retweeting posts, and real-time updates. </div>
        <div className="project-ss"></div>
        <div className="project-link">
        <a href="https://github.com/aarjookhand">Git repo</a>
        </div>
      </div>

      <div className="project">
        <div className="project-title">Event-Planner </div>
        <div className="project-description"></div>
        <div className="project-ss"></div>
        <div className="project-link"></div>
      </div>

      <div className="project">
        <div className="project-title">Uber</div>
        <div className="project-description"></div>
        <div className="project-ss"></div>
        <div className="project-link"></div>
      </div>
      
    </div>
  )
}
