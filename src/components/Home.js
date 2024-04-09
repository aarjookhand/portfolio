import React from 'react';
import '../styles/home.css';

export default function Home() {
  return (
    <div className="content">
      <div className="abt-me">
        <div className="abt-me-img"></div>
        <div className="abt-me-text">Salut ! I'm Aarjoo, a second-year Computer Science student, currently pursuing my Bachelor's degree here at EPITA. Driven by my passion  and the endless possibilities for tech in the heart of Paris, let's connect and collaborate!</div>
      </div>
      <div className="tech-stack"> Tech Stack 
      <div className="tech-stack-content"> 
        <img src="/img/Python.png" alt="PYTHON" className="src" />
        <img src="/img/React.png" alt="REACT" className="src" />
        <img src="/img/node-js.png" alt="NODEJS" className="src" />
        <img src="/img/flask.png" alt="FLASK" className="src" />
        <img src="/img/JavaScript.png" alt="JS" className="src" />
        <img src="/img/HTML5.png" alt="HTML5" className="src" />
        <img src="/img/CSS3.png" alt="CSS" className="src" />
      </div>
      </div>
    </div>
  );
}
