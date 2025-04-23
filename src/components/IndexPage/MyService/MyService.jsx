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
      <div className="service-bg-overlay"></div>
      <div className="service-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
      
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">What I Offer</span>
          <h2>My Services</h2>
          <div className="underline"></div>
          <p>Professional solutions tailored to your unique requirements</p>
        </div>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <div className="service-content">
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
              <a href="#contacts" className="service-btn">Get Started</a>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon">
                <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                <path d="M2 2l7.586 7.586"></path>
                <circle cx="11" cy="11" r="2"></circle>
              </svg>
            </div>
            <div className="service-content">
              <h3>UI/UX Designing</h3>
              <p>Crafting intuitive and engaging user experiences with clean, modern designs that enhance user satisfaction.</p>
              <ul className="service-features">
                <li>Interface design</li>
                <li>User experience research</li>
                <li>Wireframing & Prototyping</li>
                <li>Responsive layouts</li>
                <li>Design systems</li>
              </ul>
              <div className="tech-stack">
                <span>Figma</span>
                <span>Adobe XD</span>
                <span>Sketch</span>
              </div>
              <a href="#contacts" className="service-btn">Get Started</a>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <div className="service-content">
              <h3>Mobile App Development</h3>
              <p>Building native and cross-platform mobile applications that deliver exceptional user experiences.</p>
              <ul className="service-features">
                <li>iOS & Android development</li>
                <li>Cross-platform solutions</li>
                <li>App store optimization</li>
                <li>Performance optimization</li>
                <li>Maintenance & support</li>
              </ul>
              <div className="tech-stack">
                <span>React Native</span>
                <span>Flutter</span>
                <span>Swift</span>
                <span>Kotlin</span>
              </div>
              <a href="#contacts" className="service-btn">Get Started</a>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <div className="service-content">
              <h3>Digital Marketing</h3>
              <p>Strategic digital marketing services that help businesses grow their online presence and reach target audiences.</p>
              <ul className="service-features">
                <li>SEO optimization</li>
                <li>Social media marketing</li>
                <li>Content strategy</li>
                <li>Email campaigns</li>
                <li>Analytics & reporting</li>
              </ul>
              <div className="tech-stack">
                <span>Google Analytics</span>
                <span>SEMrush</span>
                <span>Mailchimp</span>
                <span>HubSpot</span>
              </div>
              <a href="#contacts" className="service-btn">Get Started</a>
            </div>
          </div>
        </div>
        
        <div className="cta-container">
          <div className="cta-content">
            <h3>Need a custom solution?</h3>
            <p>Let's discuss how I can help bring your ideas to life</p>
          </div>
          <a href="#contacts" className="cta-button">
            Get in Touch
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyService;