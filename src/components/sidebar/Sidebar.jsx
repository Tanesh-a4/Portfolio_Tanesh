import React from 'react'
import { Link,NavLink } from "react-router-dom"; 
import {sideBarMenu,socialIcons} from "../../data/data"
import "./sidebar.scss"
import icon from '../../assets/icon.svg'
const Sidebar = () => {
  return (
   <aside className='aside'>
    <div className="aside-wrapper">
        <Link to={"/"} className='logo-section'>
        <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 240 240"
    className="sidebar__logo"
>

    <path
        className="fill__color"
        d="M20 80 C60 30, 180 30, 220 80 Q200 110, 150 90 Q100 70, 20 100 Z"
    />
    

    <path
        className="fill__color"
        d="M120 90 C110 130, 140 160, 140 200 Q140 230, 100 230 Q90 200, 90 160 C90 130, 110 110, 120 90 Z"
    />
    

    <path
        d="M20 80 C60 30, 180 30, 220 80 Q200 110, 150 90 Q100 70, 20 100 M120 90 C110 130, 140 160, 140 200 Q140 230, 100 230 Q90 200, 90 160 C90 130, 110 110, 120 90"
        stroke="black"
        stroke-width="5"
        fill="none"
    />
</svg>





        <span className='switch__color'>Tanesh</span>
        </Link>
     <ul className="side-link"> {sideBarMenu.map((link,index) => 
        {
            const {text,url,icon} =link
            return (
                <li key={index}>
                    <NavLink to={url} className={({isActive})=>
                    {
                        return isActive ? 'nav_links active_links' : 'nav_links'
                    }} >
                        {icon}
                        {text}
                    </NavLink>
                </li>
            )
            
        })}
        </ul>
        <div className="social-icon">
            {socialIcons.map((icons,index)=>{
                const {icon,url } = icons
                return(
                    <a key={index} href={url} >
                        {icon }
                    </a>)
            })}
        </div>
    </div>
   </aside>
  )
}

export default Sidebar
