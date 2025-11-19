import React from 'react'
import Latest_Tanesh_resume from '../../assets/Latest_Tanesh_resume.pdf'
import Latest_Tanesh_resume2 from '../../assets/latest_resume.pdf'
import Reveal from 'react-reveal/Reveal'
import Fade from 'react-reveal/Fade'

// components
import { Cards, Blast } from '../../components'
import './about.scss'

const About = () => {
  const [letterClass, setLetterClass] = React.useState('text-animate')
  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <Reveal>
        <div className="fake-big">About</div>
      </Reveal>
      <div className="section-about-wrapper section__padding">
        <article className="section-about-description">
          <div>
            <h2 aria-label="About me">
              <Blast
                letterClass={letterClass}
                arrayStr={[
                  'M',
                  'y',
                  '',
                  'S',
                  'k',
                  'i',
                  'l',
                  'l',
                  's',
                ]}
                indexLetter={15}
              />
            </h2>
            <Fade bottom>
              <p>
              Hi, I'm an ambitious Full Stack Developer with a passion for coding. I'm eager to join an established IT company where I can work with the latest technologies on challenging and diverse projects.
              </p>
            </Fade>
            <Fade bottom>
              <p>
              . I specialize in building captivating UI effects, dynamic web pages with stunning animations, and creating intuitive, dynamic user experiences. I'm always open to new opportunities worldwide that will help me enhance my skills and collaborate with other programmers.
              </p>
            </Fade>
            <Fade bottom>
              <p>
              One of the most exciting things about me is my readiness to tackle challenges head-on. You can find more details about my background and experience in my CV here.
              </p>
            </Fade>
            <Fade left>
              <a
                style={{ marginTop: '2rem' }}
                href={Latest_Tanesh_resume2}
                download
                className="contact-button submit-button"
              >
                <div>
                  <span className="bg switch__bg"></span>
                  <span className="base switch__border-color"></span>
                  <span className="text">Download CV</span>
                </div>
              </a>
            </Fade>
          </div>
        </article>
        
        {/* programming language cards */}
        <Cards />
      </div>
    </>
  )
}

export default About
