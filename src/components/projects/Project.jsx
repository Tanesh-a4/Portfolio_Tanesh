import React from 'react';
import Fade from "react-reveal/Fade";
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import "./projects.scss";

const Project = (prop) => {
  const {imgUrl, name, desc, stack, gitHubUrl, website, featured = false, index} = prop;
  
  // Parse stack string into array if it's not already
  const techStack = typeof stack === 'string' ? stack.split(',').map(item => item.trim()) : stack;
  
  return (
    <Fade bottom>
      <section className="section__projects-single-projects">
        {featured && <div className="featured-project">Featured</div>}
        <div className="project-count">{String(index + 1).padStart(2, '0')}</div>
        
        <div className="project-image-container">
          <div className="project-image-wrapper">
            <img src={imgUrl} alt={name} className="project-image" />
          </div>
          
          <div className="section__projects-contents">
            <h3 className="project-title">{name}</h3>
            <p className="desc">{desc}</p>
            
            <div className="section__projects-stack">
              <h2>Tech:</h2>
              {typeof techStack === 'string' ? (
                <span>{techStack}</span>
              ) : (
                techStack.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))
              )}
            </div>
            
            <div className="section__projects-icon">
              <a 
                href={gitHubUrl.url} 
                className="switch__color" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="View GitHub Repository"
              >
                {gitHubUrl.icon || <FiGithub />}
                <span>Code</span>
              </a>
              
              <a 
                href={website.url} 
                className="switch__color" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit Live Website"
              >
                {website.icon || <FiExternalLink />}
                <span>Live</span>
              </a>
            </div>
          </div>
        </div>         
      </section>         
    </Fade>
  );
};

export default Project;
