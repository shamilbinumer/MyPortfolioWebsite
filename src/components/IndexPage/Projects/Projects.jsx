import { useState, useEffect, useRef } from 'react';
import './Projects.scss';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [activeProject, setActiveProject] = useState(null);
  const projectsRef = useRef(null);
  
  // Sample project data - replace with your actual projects
  const projectsData = [
    {
      id: 1,
      title: "Litlablearning Web App",
      category: ["web", "fullstack"],
      image: "/Images/projects/litlearning.png",
      technologies: ["React", "Node.js", "Firebase", "Payment Gateway"],
      description: "A learning platform for Calicut University UG students.",
      liveLink: "https://litlab.live/",
    },
    {
      id: 2,
      title: "Tharacart Marketplace",
      category: ["web", "fullstack"],
      image: "/Images/projects/thara.png",
      technologies: ["React", "SCSS", "Node.js", "Firestore", "Payment Gateway"],
      description: "An e-commerce website similar to Flipkart, featuring product listings, cart functionality, and secure checkout.",
      liveLink: "https://b2b.tharacart.com/",
    },
    {
      id: 3,
      title: "Malabar Adukkala",
      category: ["web", "frontend"],
      image: "/Images/projects/mbc.png",
      technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
      description: "A website for the restaurant community, connecting food enthusiasts and businesses.",
      liveLink: "https://malabaradukkala.club/",
    },
    {
      id: 4,
      title: "Firstlogic Metalab",
      category: ["web", "frontend"],
      image: "/Images/projects/meta.png",
      technologies: ["React", "JavaScript", "SCSS"],
      description: "A website for an IT company showcasing services, projects, and client solutions.",
      liveLink: "https://firstlogicmetalab.com/",
    },
    {
      id: 5,
      title: "Firstlogic Institute of Technology",
      category: ["web", "frontend"],
      image: "/Images/projects/flit.png",
      technologies: ["React", "JavaScript", "SCSS"],
      description: "A website for a tech-related courses providing institute, featuring course details, enrollment options, and student resources.",
      liveLink: "https://firstlogicinstitute.com/",
    },
    {
      id: 6,
      title: "Litlab Learning Portfolio Website",
      category: ["web", "frontend"],
      image: "/Images/projects/lit learning portsolio.png",
      technologies: ["React", "JavaScript", "SCSS"],
      description: "A learning platform for Calicut University UG students.",
      liveLink: "https://litlablearning.com/",
    },
  ];
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category.includes(filter));
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });
    
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    
    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const handleProjectHover = (id) => {
    setActiveProject(id);
  };

  const handleProjectLeave = () => {
    setActiveProject(null);
  };

  return (
    <div className='ProjectsMainWrapper' id="projects" ref={projectsRef}>
      <div className="projects-bg-pattern"></div>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">What I've Built</span>
          <h2>My Projects</h2>
          <div className="underline"></div>
          <p>Explore my recent work and creative solutions</p>
        </div>
        
        <div className="filter-container">
          <div className="filter-tabs">
            <button 
              className={filter === 'all' ? 'active' : ''} 
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button 
              className={filter === 'web' ? 'active' : ''} 
              onClick={() => setFilter('web')}
            >
              Web Development
            </button>
            <button 
              className={filter === 'fullstack' ? 'active' : ''} 
              onClick={() => setFilter('fullstack')}
            >
              Full Stack
            </button>
          </div>
        </div>
        
        <div className="projects-showcase">
          {filteredProjects.map((project) => (
            <div 
              className={`project-card ${activeProject === project.id ? 'active' : ''}`} 
              key={project.id}
              onMouseEnter={() => handleProjectHover(project.id)}
              onMouseLeave={handleProjectLeave}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-tech-badge">
                    {project.technologies[0]}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
                <div className="project-actions">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="view-project-btn">
                      View Project
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="more-projects-section">
          <div className="more-projects-content">
            <h3>Want to see more?</h3>
            <p>Check out my GitHub for all my projects and open-source contributions.</p>
          </div>
          <a href="https://github.com/shamilbinumer" target="_blank" rel="noopener noreferrer" className="github-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            View GitHub Profile
          </a>
        </div>
      </div>
      
      <div className="bg-circle circle-1"></div>
      <div className="bg-circle circle-2"></div>
    </div>
  );
};

export default Projects;