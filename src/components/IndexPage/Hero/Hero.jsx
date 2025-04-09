import { useEffect, useRef, useState } from 'react';
import './Hero.scss';

const Hero = () => {
  const heroRef = useRef(null);
  const [typedText, setTypedText] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);
  const fullText = "Software Developer";
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    // Start typing effect after a delay
    const typingDelay = setTimeout(() => {
      let currentIndex = 0;
      
      const typingInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setTypedText(fullText.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setTypingComplete(true);
        }
      }, 100); // Typing speed (milliseconds per character)
      
      return () => clearInterval(typingInterval);
    }, 1000); // Delay before typing starts
    
    return () => clearTimeout(typingDelay);
  }, []);

  return (
    <div className='HeroMainWrapper' ref={heroRef} id="home">
      <div className="hero-particle-bg"></div>
      <div className="hero-gradient-overlay"></div>
      
      <div className="container">
        <div className="content-section">
          <div className="text-content">
            <div className="greeting-container">
              <h4 className="greeting">Hello, I'm</h4>
              <div className="greeting-line"></div>
            </div>
            
            <h1 className="name">Mohammed <span>Shamil</span></h1>
            
            <div className="position-container">
              <h2 className="position">
                <span className="position-text">{typedText}</span>
                <span className={`cursor ${typingComplete ? 'blink' : ''}`}></span>
              </h2>
            </div>
            
            <p className="description">
              Passionate about creating elegant solutions to complex problems. 
              Specialized in building modern web applications with clean, 
              efficient code and delightful user experiences.
            </p>
            
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-value">1.5+</div>
                <div className="stat-label">Years of Experience</div>
              </div>
              <div className="stat-separator"></div>
              <div className="stat-item">
                <div className="stat-value">10+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-separator"></div>
              <div className="stat-item">
                <div className="stat-value">5+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div>
            
            <div className="cta-buttons">
              <a href="#projects" className="btn primary-btn">
                <span>View My Work</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="#contacts" className="btn secondary-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>Contact Me</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="image-section">
          <div className="image-container">
            <div className="shape-bg"></div>
            <div className="image-wrapper">
              <img src="/Images/shamil-img1.jpg" alt="Mohammed Shamil" />
            </div>
            <div className="image-frame"></div>
            <div className="tech-badges">
              <div className="tech-badge html">HTML</div>
              <div className="tech-badge css">CSS</div>
              <div className="tech-badge js">JS</div>
              <div className="tech-badge react">React</div>
              <div className="tech-badge node">Node.js</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
      
      <div className="hero-shape shape1"></div>
      <div className="hero-shape shape2"></div>
      <div className="hero-shape shape3"></div>
    </div>
  );
};

export default Hero;