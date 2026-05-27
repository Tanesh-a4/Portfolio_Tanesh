import React from 'react'

// react-icons
import { FiGrid, FiLinkedin, FiYoutube, FiMail } from 'react-icons/fi'
import { FaPhp, FaBitbucket } from 'react-icons/fa'
import { VscProject } from 'react-icons/vsc'
import {
  BsBootstrapFill,
  BsPersonLinesFill,
  BsGithub,
} from 'react-icons/bs'
import { SiDjango } from 'react-icons/si';

import { RiContactsLine, RiReactjsLine } from 'react-icons/ri'
import {
  SiExpress,
  SiRedux,
} from 'react-icons/si'

import { GrGithub } from 'react-icons/gr'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiMongodb } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { FaNodeJs, FaGit } from 'react-icons/fa'

// sidebar menu functionality
const sideBarMenu = [
  {
    text: 'Home',
    icon: <FiGrid className="link-icon" />,
    url: '/',
  },
  {
    text: 'About',
    icon: <BsPersonLinesFill className="link-icon" />,
    url: '/about',
  },
  {
    text: 'My Projects',
    icon: <VscProject className="link-icon" />,
    url: '/project',
  },
 
  {
    text: 'Contact Me',
    icon: <RiContactsLine className="link-icon" />,
    url: '/contact',
  },
  
  
]
// social media icons
const socialIcons = [
  {
    icon: <GrGithub className="icon switch__color" />,
    url: 'https://github.com/Tanesh-a4 ',
  },
  
  {
    icon: <FiLinkedin className="icon switch__color" />,
    url: 'https://www.linkedin.com/in/tanesh-ashan-011087260/',
  },
   {
    icon: <FiMail className="icon switch__color" />,
    url: 'mailto:your-email@example.com',
  },
  {
    icon: <FiYoutube className="icon switch__color" />,
    url: 'https://www.youtube.com/@taneshashan4181',
  },
]
// skills card
const skillSet = [
  {
    icon: <RiReactjsLine className="skills-icon switch__color" />,
    spanText: 'REACT JS',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started',
  },
  {
    icon: <SiDjango className="skills-icon switch__color" />,
    spanText: 'Django',
    url: 'https://www.djangoproject.com/start/',
  },
  {
    icon: <FaPhp className="skills-icon switch__color" />,
    spanText: 'PHP',
    url: 'https://www.php.net/docs.php',
  },
  {
    icon: <AiFillHtml5 className="skills-icon switch__color" />,
    spanText: 'HTML',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    icon: <DiCss3 className="skills-icon switch__color" />,
    spanText: 'CSS',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    icon: <IoLogoJavascript className="skills-icon switch__color" />,
    spanText: 'JAVASCRIPT',
    url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript',
  },
  {
    icon: <BsBootstrapFill className="skills-icon switch__color" />,
    spanText: 'BOOTSTRAP',
    url: 'https://getbootstrap.com/',
  },
  {
    icon: <FaGit className="skills-icon switch__color" />,
    spanText: 'GIT',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub',
  },
  {
    icon: <BsGithub className="skills-icon switch__color" />,
    spanText: 'GITHUB',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub',
  },
  {
    icon: <FaBitbucket className="skills-icon switch__color" />,
    spanText: 'BITBUCKET',
    url: 'https://bitbucket.org/product/',
  },
  {
    icon: <FaNodeJs className="skills-icon switch__color" />,
    spanText: 'NODE JS',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs',
  },
  {
    icon: <DiMongodb className="skills-icon switch__color" />,
    spanText: 'MONGO DB',
    url: 'https://www.mongodb.com/docs/',
  },
  {
    icon: <SiExpress className="skills-icon switch__color" />,
    spanText: 'EXPRESS JS',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Express',
  },
  {
    icon: <SiRedux className="skills-icon switch__color" />,
    spanText: 'Redux',
    url: 'https://redux.js.org/introduction/getting-started',
  },
]

export { sideBarMenu, socialIcons, skillSet }
