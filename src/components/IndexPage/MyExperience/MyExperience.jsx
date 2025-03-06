import { useEffect, useRef } from 'react';
import './MyExperience.scss';

const MyExperience = () => {
  const experienceRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });
    
    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }
    
    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <div className='MyExperienceMainWrapper' id="experience" ref={experienceRef}>
      <div className="container">
        <div className="section-header">
          <h2>My Experience</h2>
          <div className="underline"></div>
          <p>Professional journey and career milestones</p>
        </div>
        
        <div className="experience-cards">
          <div className="experience-card current">
            <div className="card-header">
              <div className="status-badge">Current</div>
              <div className="company-logo">
                <div className="logo-placeholder">FL</div>
              </div>
            </div>
            
            <div className="card-content">
              <h3 className="job-title">Full Stack Developer</h3>
              <h4 className="company-name">Firstlogic Metalab</h4>
              
              <div className="location">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Perinthalmanna, Malappuram</span>
              </div>
              
              <div className="divider"></div>
              
              <div className="job-description">
                <p>Working as a full stack developer contributing to web application development, feature implementation, and maintaining high-quality code standards.</p>
              </div>
              
              <div className="key-achievements">
                <h5>Key Responsibilities:</h5>
                <ul>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Developing responsive frontends using React and modern JavaScript</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Building robust backend APIs with Node.js and Express</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Database design and management with MongoDB</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Collaborating with design and product teams for feature implementation</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Code reviews and maintaining code quality</span>
                  </li>
                </ul>
              </div>
              
              <div className="tech-stack">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Express</span>
                <span>JavaScript</span>
                <span>Git</span>
              </div>
            </div>
            
            <div className="card-glow"></div>
          </div>
          
          <div className="experience-card previous">
            <div className="card-header">
              <div className="status-badge">Previous</div>
              <div className="company-logo">
                <div className="logo-placeholder">SS</div>
              </div>
            </div>
            
            <div className="card-content">
              <h3 className="job-title">MERN Stack Developer Intern</h3>
              <h4 className="company-name">Synnefo Solutions</h4>
              
              <div className="location">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Kochi, Kerala</span>
              </div>
              
              <div className="divider"></div>
              
              <div className="job-description">
                <p>Gained practical experience in MERN stack development while working on real-world projects. Contributed to both frontend and backend development under mentorship.</p>
              </div>
              
              <div className="key-achievements">
                <h5>Key Responsibilities:</h5>
                <ul>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Built UI components using React.js and state management with Redux</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Developed RESTful APIs with Node.js and Express</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Implemented data models and queries with MongoDB</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Participated in Agile development processes</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Assisted in testing and debugging applications</span>
                  </li>
                </ul>
              </div>
              
              <div className="tech-stack">
                <span>React</span>
                <span>Redux</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Express</span>
                <span>Git</span>
              </div>
            </div>
            
            <div className="card-glow"></div>
          </div>
        </div>
        
        <div className="experience-cta">
          <a href="#contacts" className="contact-button">
            <span>Let's Work Together</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
      
      <div className="experience-background">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>
    </div>
  );
};

export default MyExperience;