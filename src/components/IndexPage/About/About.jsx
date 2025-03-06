import { useEffect, useRef } from 'react';
import './About.scss';

const About = () => {
  const aboutRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });
    
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div className='AboutMainWrapper' id="about" ref={aboutRef}>
      <div className="container">
        <div className="image-section">
          <div className="vector-container">
            <svg viewBox="0 0 500 500" className="vector-illustration">
              <path className="circle" d="M250,50 a200,200 0 1,0 1,0 z" />
              <g className="code-elements">
                <path className="bracket" d="M180,150 l-30,20 v160 l30,20" />
                <path className="bracket" d="M320,150 l30,20 v160 l-30,20" />
                <g className="code-lines">
                  <path d="M200,200 h100" />
                  <path d="M220,230 h60" />
                  <path d="M200,260 h100" />
                  <path d="M230,290 h40" />
                  <path d="M200,320 h100" />
                </g>
              </g>
              <g className="design-elements">
                <circle cx="400" cy="100" r="15" />
                <circle cx="430" cy="130" r="10" />
                <circle cx="70" cy="380" r="20" />
                <circle cx="100" cy="350" r="12" />
              </g>
            </svg>
          </div>
        </div>
        
        <div className="content-section">
          <div className="section-title">
            <h2>About Me</h2>
            <div className="underline"></div>
          </div>
          
          <div className="about-content">
            <p className="description">
              I'm a passionate Software Developer with expertise in building responsive 
              web applications. With a strong foundation in both frontend and backend 
              technologies, I create seamless digital experiences that solve real-world problems.
            </p>
            
            <p className="description">
              My journey in software development began with a curiosity about how digital 
              products work. This curiosity evolved into a career where I continuously 
              learn and apply new technologies to create efficient, scalable, and user-friendly 
              applications.
            </p>
            
            <div className="skills-container">
              <h3>My Skills</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-name">React</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{width: '90%'}}></div>
                  </div>
                </div>
                
                <div className="skill-item">
                  <div className="skill-name">JavaScript</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{width: '85%'}}></div>
                  </div>
                </div>
                
                <div className="skill-item">
                  <div className="skill-name">Node.js</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{width: '80%'}}></div>
                  </div>
                </div>
                
                <div className="skill-item">
                  <div className="skill-name">CSS/SCSS</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{width: '90%'}}></div>
                  </div>
                </div>
                
                <div className="skill-item">
                  <div className="skill-name">MongoDB</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{width: '75%'}}></div>
                  </div>
                </div>
                
                <div className="skill-item">
                  <div className="skill-name">REST API</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;