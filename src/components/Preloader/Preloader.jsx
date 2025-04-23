import React, { useEffect, useState } from 'react';
import './Preloader.scss';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time (you can replace this with your actual loading logic)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // When loading is complete, hide the preloader and allow the main content to display
  if (!loading) return null;
  
  return (
    <div className="preloader">
      <div className="preloader__content">
        <div className="preloader__spinner">
          <div className="circle-container">
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            <div className="circle-3"></div>
          </div>
          <div className="preloader__logo">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 15 L85 85 L15 85 Z" fill="none" stroke="#FF0000" strokeWidth="3" />
            </svg>
          </div>
        </div>
        
        <div className="preloader__text">
          <div className="preloader__title">Loading</div>
          <div className="preloader__dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>
        
        <div className="preloader__progress-container">
          <div className="preloader__progress-bar"></div>
        </div>
      </div>
      
      <div className="preloader__background">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>
    </div>
  );
};

export default Preloader;