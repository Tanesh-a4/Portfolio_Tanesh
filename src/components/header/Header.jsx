import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import './header.scss'
import Blast from '../BlastAnimation/Blast'
import Logo from '../logoAnimation/Logo'
import Experience from '../experience/Experience';

const firstletterArray=["T"]
const nameArray =["n","e","s","h"]
const jobArray =["W","e","b","  "," ","D","e","v","e","l","o","p","e","r"]



const Header = () => {
    const [letterClass,setletterClass] = useState("text-animate")

    useEffect(()=>
    {
        setTimeout(()=>{
            setletterClass("text-animate-hover")
        },4000)
    })

        return (
            <>
            <section className='section-1 header__container section__padding'>
                <main className='intro-page '>
                    <h1>
                        <span className={` ${letterClass} _6`}>H</span>
                        <span className={` ${letterClass} _7`}>i</span>
                        <span className={` ${letterClass} _8`}>,</span>
                        <br/>
                        <span className={` ${letterClass} _9`}>I</span>
                        <span className={` ${letterClass} _10`}>'</span>
                        <span className={` ${letterClass} _11`}>m </span>
                        {' '}
                       <Blast letterClass={letterClass} arrayStr={firstletterArray} indexLetter={14} />
                       <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 171 210"
                            className="sidebar__logo"
                            >
                            <path
                                className="fill__color lower-logo home-logo animate-logo-1"
                                d="M171 209.194C159.166 128.482 123.848 68.1928 79.4896 55.1237C39.9765 68.9721 10.4845 132.104 0 210C24.4381 165.9 53.1053 124.32 80.4167 105.975C115.428 124.605 139.927 163.164 171 209.194L171 209.194Z"
                            />
                                        <path
                                d="M12.2177 101.884C32.1592 73.1578 55.5534 46.0733 77.8409 34.1237C106.411 46.259 126.403 71.3757 151.759 101.358C142.102 48.7847 113.282 9.51343 77.0849 1C44.8404 10.0195 20.7735 51.1438 12.2177 101.883V101.884Z"
                                fill="white"
                                className='animate-logo-2'
                            />
                            </svg>
                            <Blast letterClass={letterClass} arrayStr={nameArray} indexLetter={15} /><br/>
                            <Blast letterClass={letterClass} arrayStr={jobArray} indexLetter={22}  />
                    </h1>
                    <p className="text-desc">
                        WEB DEVELOPER/UI/UX DESIGNER
                    </p>
                    <Link to={"/contact"} className='contact-button'> 
                        <div>
                            <span className='bg switch__bg'></span>
                            <span className='base switch__border-color'></span>
                            <span className="text">Contact me</span>
                            </div>            
                    </Link>
                    <Logo/>
                </main>
            </section>
            
            {/* Add the Experience section */}
            {/* <Experience /> */}
            </>
        )
        }

        export default Header
