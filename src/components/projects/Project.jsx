import React from 'react'
import Fade  from "react-reveal/Fade";
import "./projects.scss"
const Project = (prop) => {
    //console.log(prop)
  const {imgUrl,name,desc,stack,gitHubUrl,website } = prop
    return (
    <Fade bottom>
       <section section className="section__projects-single-projects">  
            <img src={imgUrl}  alt="" />
            <div className="section__projects-contents">
                <p>{name}</p>
                <p className='desc'>{desc}</p>
                <div className="section__projects-stack">
                     <h2>Built With</h2>
                     <span>{stack}</span>
                </div>
                <div className="section__projects-icon">
                    <a href={gitHubUrl.url} className='switch__color '>
                        { gitHubUrl.icon}
                    </a>
                    <a href={website.url} className='switch__color'>
                        {website.icon}
                    </a>
                </div>
            </div>         
         </section>         
        </Fade>
  )
}

export default Project;
