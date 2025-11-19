import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './header.scss'
import Blast from '../BlastAnimation/Blast'
import Logo from '../logoAnimation/Logo'
import Experience from '../experience/Experience';

const firstletterArray=["T"]
const nameArray =["a","n","e","s","h"]
const jobArray =["W","e","b","  "," ","D","e","v","e","l","o","p","e","r"]



const Header = () => {
    const [letterClass, setletterClass] = useState("text-animate")
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
    useEffect(() => {
        setTimeout(() => {
            setletterClass("text-animate-hover")
        }, 4000)
        
        // Add responsive handler
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }
        
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    
    // Responsive logo styling
    const getLogoStyle = () => {
        // Base styles
        const baseStyle = {
            padding: "0px",
            verticalAlign: "middle",
            display: "inline-block",
            position: "relative"
        }
        
        // Responsive adjustments
        if (windowWidth > 1200) {
            return {
                ...baseStyle,
                width: "12%",
                height: "145px",
                marginRight: "-10px",
                top: "-20px"
            }
        } else if (windowWidth > 768) {
            return {
                ...baseStyle,
                width: "15%",
                height: "120px",
                marginRight: "-8px",
                top: "-15px"
            }
        } else if (windowWidth > 480) {
            return {
                ...baseStyle,
                width: "18%",
                height: "100px",
                marginRight: "-6px",
                top: "-10px"
            }
        } else {
            return {
                ...baseStyle,
                width: "20%",
                height: "80px",
                marginRight: "-4px",
                top: "-8px"
            }
        }
    }

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
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 240 240"
                        className="sidebar__logo"
                        style={getLogoStyle()}
                    >
                        <path 
                            className="fill__color lower-logo home-logo animate-logo-1"
                            d="M 14.426 77.326 C 54.426 24.718 179.602 36.68 219.602 71.752 C 206.268 95.134 188.509 98.589 155.176 86.899 C 121.842 75.209 74.129 82.511 20.796 100.047 L 14.426 77.326 Z" 
                        />
                        <path 
                            className="fill__color animate-logo-2"
                            d="M 137.122 97.168 C 126.317 125.266 108.226 137.882 109.116 156.098 C 109.424 162.403 113.445 169.776 119.494 178.296 C 122.379 182.36 123.574 186.378 129.073 191.24 C 148.908 208.776 128.825 235.326 102.213 230.62 C 88.88 213.953 66.758 184.574 70.091 151.24 C 70.315 130.338 83.292 90.128 99.611 88.782 C 127.878 86.45 144.753 97.451 137.122 97.168 Z"
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
