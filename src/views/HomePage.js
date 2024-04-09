import React, { useRef} from 'react'
import Home from '../components/Home'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import '../styles/outline.css'

function HomePage() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
      ref.current.scrollIntoView({ behavior: 'smooth' });
  };

    return (
        <div>
            <div className="header">
                <div className="name">Aarjoo KHAND</div>
                <div className="navigation">
                    <div className="home" onClick={() => scrollToRef(homeRef)}>HOME</div>
                    <div className="projects" onClick={() => scrollToRef(projectsRef)}>PROJECTS</div>
                    <div className="contact" onClick={() => scrollToRef(contactRef)}>CONTACT</div>
                </div>
            </div>
            <div className="content">
              <div className="home-content">
              <div ref={homeRef}>
                    <Home/>
                </div>
              </div>

              <div className="project-content">
              <div ref={projectsRef}>
                    <Projects/>
                </div>                
              </div>

              <div className="contact-content">
              <div ref={contactRef}>
                    <Contact/>
                </div>                              
              </div>              

            </div>
        </div>
    );
}

export default HomePage
