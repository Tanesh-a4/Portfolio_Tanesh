import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {  FiMapPin } from 'react-icons/fi';
import './experience.scss';
import Blast from '../BlastAnimation/Blast';

// Import company logos
import boschLogo from './bosch_logo1.png';
import ai4bLogo from './ai4b-logo.png';

const Experience = () => {
  const [letterClass, setLetterClass] = React.useState('text-animate')
  
  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const experienceData = [
  {
    company: "AI4Bharat, IIT Madras",
    role: "Software Developer",
    duration: "June 2025 – Present",
    location: "Remote",
    description:
      "Refactored and optimized React components, improved integration with backend services, and collaborated on deploying scalable systems using FastAPI and Docker, leading to a 20% increase in model inference speed and accuracy.",
    skills: ["React", "FastAPI", "Docker", "Python"],
    color: "#0088A9",
    logo: ai4bLogo
  },
  {
    company: "Bosch India",
    role: "Web Development Intern",
    duration: "May 2024 – August 2024",
    location: "Maharashtra, India",
    description:
      "Built a full-stack Intern Management System with Django and improved operational tools using custom views, reporting, and data visualization—cutting onboarding and reporting time significantly.",
    skills: ["Django", "Python", "HTML/CSS", "JavaScript", "Data Visualization"],
    color: "#DA5B3D",
    logo: boschLogo
  },
];


  return (
    <section className="experience-section">
      <motion.div
        className="experience-container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="section-header">
          <h2 className="section-title">
            <Blast
              letterClass={letterClass}
              arrayStr={[
                "W", "o", "r", "k", " ",
                "E", "x", "p", "e", "r", "i", "e", "n", "c", "e"
              ]}
              indexLetter={15}
            />
          </h2>
          <span className="section-subtitle">My professional journey</span>
          <span className="line animate-line"></span>
        </div>

        <div className="experience-timeline">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-card"
              variants={itemVariants}
              style={{ 
                '--accent-color': exp.color,
                opacity: 1
              }}
            >
              <div className="timeline-date">{exp.duration}</div>
              
              <div className="card-header">
                <div
                  className="company-logo"
                  style={{ backgroundColor: `${exp.color}20`  }}
                >
                  <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo-img"  />
                </div>
                <div className="header-content">
                  <h3 className="company-name">{exp.company}</h3>
                  <h4 className="role">{exp.role}</h4>
                </div>
              </div>

              <div className="card-meta">
                <div className="meta-item">
                  <FiMapPin />
                  <span style={{color : 'grey'}}>{exp.location}</span>
                </div>
              </div>

              <p className="description">{exp.description}</p>

              <div className="skills-container">
                {exp.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
