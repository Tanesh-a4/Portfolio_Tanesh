import React from 'react'
import Header from '../../components/header/Header'
import About from '../about/About'
import ProjectPage from '../project/ProjectPage'
import Experience from '../../components/experience/Experience'

const Home = () => {
  return (
    <>
    <Header/>
    <section className='section-experinece'>
        <Experience/> {/* Added Experience section here */}
    </section>
    <section className="section-about">
        <About/>
    </section>
    
    <section className='section-project'>
      <ProjectPage/>
    </section>  
    </> 
  )
}

export default Home
