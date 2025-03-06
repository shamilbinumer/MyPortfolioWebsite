import { useEffect, useRef } from 'react';
import './MyService.scss';

const MyService = () => {
  const servicesRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });
    
    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }
    
    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  return (
    <div className='MyServiceMainWrapper' id="services" ref={servicesRef}>
      <div className="container">
        <div className="section-header">
          <h2>My Services</h2>
          <div className="underline"></div>
          <p>Professional solutions tailored to your needs</p>
        </div>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3>Web Development</h3>
            <p>Creating robust, scalable and high-performance web applications using modern technologies and best practices.</p>
            <ul className="service-features">
              <li>Responsive websites</li>
              <li>E-commerce solutions</li>
              <li>Progressive Web Apps</li>
              <li>Custom CMS development</li>
              <li>API development & integration</li>
            </ul>
            <div className="tech-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Express</span>
            </div>
          </div>
          
          <div className="service-card">
            <div className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon">
                <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                <path d="M2 2l7.586 7.586"></path>
                <circle cx="11" cy="11" r="2"></circle>
              </svg>
            </div>
            <h3>UI/UX Designing</h3>
            <p>Crafting intuitive and engaging user experiences with clean, modern designs that enhance user satisfaction.</p>
            <ul className="service-features">
              <li>Interface design</li>
            </ul>
            <div className="tech-stack">
              <span>Figma</span>
           
            </div>
          </div>
        </div>
        
        <div className="cta-container">
          <h3>Need a custom solution?</h3>
          <p>Let's discuss how I can help bring your ideas to life</p>
          <a href="#contacts" className="cta-button">Get in Touch</a>
        </div>
      </div>
      
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
    </div>
  );
};

export default MyService;