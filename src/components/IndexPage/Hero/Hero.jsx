import { useEffect, useRef, useState } from 'react';
import './Hero.scss';

const Hero = () => {
  const heroRef = useRef(null);
  const [typedText, setTypedText] = useState('');
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
        }
      }, 100); // Typing speed (milliseconds per character)
      
      return () => clearInterval(typingInterval);
    }, 1000); // Delay before typing starts
    
    return () => clearTimeout(typingDelay);
  }, []);

  return (
    <div className='HeroMainWrapper' ref={heroRef} id="home">
      <div className="container">
        <div className="content-section">
          <h4 className="greeting">Hello, I'm</h4>
          <h1 className="name">Mohammed Shamil</h1>
          <h2 className="position">
            {typedText}
          </h2>
          <p className="description">
            Passionate about creating elegant solutions to complex problems. 
            Specialized in building modern web applications with clean, 
            efficient code and delightful user experiences.
          </p>
          <div className="cta-buttons">
            <a href="#projects" className="btn primary-btn">View My Work</a>
            <a href="#contacts" className="btn secondary-btn">Contact Me</a>
          </div>
        </div>
        
        <div className="image-section">
          <div className="image-container">
            <div className="shape-bg"></div>
            <div className="image-wrapper">
              <img src="/Images/shamil-img1.jpg" alt="Mohammed Shamil" />
            </div>
            <div className="experience-badge">
              <span className="years">1.5</span>
              <span className="text">Years<br/>Experience</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="arrow">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Hero;