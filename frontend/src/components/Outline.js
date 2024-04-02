import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/outline.css'



export default function Outline() {
    const navigate = useNavigate();
  return (
    <div className="outine">
        <div className="header">
        <div className="name">Aarjoo KHAND </div>
        <div className="navigation">
            <div className="home" onClick={() => navigate('/')}>HOME</div>
            <div className="projects" onClick={() => navigate('/projects')}>PROJECTS</div>
            <div className="contact" onClick={() => navigate('/contact')}>CONTACT</div>
        </div>
        </div>
        <div className="content">{/* Render other components in between */}</div>

    </div>
  )
}


