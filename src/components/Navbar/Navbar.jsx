import { useState, useEffect } from 'react';
import './Navbar.scss';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine which section is currently in view
      const sections = ['home', 'about', 'projects', 'contacts'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the section is in the viewport
          // We use a buffer of the element being at least 30% visible
          if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Helper function to check if a section is active
  const isActive = (section) => {
    return activeSection === section;
  };

  return (
    <div className={`NavbarMainWrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          {/* <h2>MS</h2> */}
        </div>
        
        {/* Desktop menu */}
        <nav className="desktop-menu">
          <ul>
            <li><a href="#home" className={isActive('home') ? 'active' : ''}>Home</a></li>
            <li><a href="#about" className={isActive('about') ? 'active' : ''}>About</a></li>
            <li><a href="#projects" className={isActive('projects') ? 'active' : ''}>Projects</a></li>
            <li><a href="#contacts" className={isActive('contacts') ? 'active' : ''}>Contacts</a></li>
          </ul>
        </nav>
        
        {/* Mobile menu button */}
        <div className="mobile-menu-button" onClick={toggleMobileMenu}>
          <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      
      {/* Mobile menu dropdown */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home" className={isActive('home') ? 'active' : ''} onClick={toggleMobileMenu}>Home</a></li>
          <li><a href="#about" className={isActive('about') ? 'active' : ''} onClick={toggleMobileMenu}>About</a></li>
          <li><a href="#projects" className={isActive('projects') ? 'active' : ''} onClick={toggleMobileMenu}>Projects</a></li>
          <li><a href="#contacts" className={isActive('contacts') ? 'active' : ''} onClick={toggleMobileMenu}>Contacts</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;