import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Blast } from "../../components";
import { projects } from "./index";
import { Project } from "../../components";
import "./projectpage.scss";

const ProjectPage = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  
  return (
    <>
      <section className="section__projects section__padding">
        <div className="fake-big">Projects</div>
        <h2 aria-label="My projects" className="section__projects-title">
          <Blast
            letterClass={letterClass}
            arrayStr={["M", "y", "", "P", "r", "o", "j", "e", "c", "t","s"]}
            indexLetter={12}
          />
        </h2>
        
        <div className="section__projects-description">
          <Fade bottom>
            <p>
              Browse through my latest projects and applications. Each one represents a unique challenge and showcases different skills in my development journey.
            </p>
          </Fade>
        </div>
        
        <div className="section__projects-wrapper">
          {projects.map((project, index) => {
            return <Project 
              {...project} 
              key={index} 
              index={index}
              featured={index === 0} 
            />;
          })}
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
