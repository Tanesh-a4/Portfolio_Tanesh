import { GrGithub } from 'react-icons/gr'
import { TbWorld } from 'react-icons/tb'

// images from the asset folder in the image file
import {
  wordleClone,
  quiklearn,
  gpt3,
  gericht,
  huddle,
  restCOuntry,
  stress,
  generate,
  Journal,
} from '../../assets/images'

// projects' id, name, stacks, icon and url data
export const projects = [
  {
    id: 1,
    name: 'Quik Learn',
    desc:
      'A online platform that gives you the ability to learn different subjects',
    stack: 'React JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Tanesh-a4/Elearning_22',
    },
    website: {
      icon: <TbWorld />,  
      url: 'https://quiklearn-career.vercel.app/',
    },
    imgUrl: quiklearn,
  },
   {
  id: 2,
  name: 'Generate Awesome',
  desc: 'An AI-powered content generator built using LangChain and Next.js. It creates polished, ready-to-use README files and project descriptions effortlessly.',
  stack: 'Next.js, LangChain, OpenAI',
  gitHubUrl: {
    icon: <GrGithub />,
    url: 'https://github.com/Tanesh-a4/generate-awesome',
  },
  website: {
    icon: <TbWorld />,
    url: 'https://generate-awesome.vercel.app/',
  },
  imgUrl:
    generate,
},
{
  id: 3,
  name: 'Journal App',
  desc: 'A beautifully minimal journaling app built with Next.js, designed for fast, distraction-free writing and seamless cloud access.',
  stack: 'Next.js',
  gitHubUrl: {
    icon: <GrGithub />,
    url: 'https://github.com/Tanesh-a4/journal',
  },
  website: {
    icon: <TbWorld />,
    url: 'https://journal-ten-gold.vercel.app/',
  },
  imgUrl:
    Journal,
},
    {
    id: 4,
    name: 'Bubble Aura ',
    desc: 'This is an aamazing game that you can play with your friend ',
    stack: 'HTML CSS JS',
    imgUrl: gpt3,

    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Tanesh-a4/bubbleaure',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://bubbleaure.vercel.app/',
    },
  },
  {
    id: 5,
    name: 'EEG Based Stress Detection',
    desc: 'A project that detects stress level using EEG signals',
    stack: 'React JS,Python',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Tanesh-a4/bci_project-client',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://stress-detector-five.vercel.app/',
    },
    imgUrl:stress,
  },
  {
    id: 6,
    name: 'Portfolio Website',
    desc: 'A Responsive portfolio website design with great UI Effect',
    stack: 'React JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Tanesh-a4/Portfolio_Tanesh',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://portfolio-tanesh.vercel.app/',
    },
    imgUrl: gericht,
  },




  // {
  //   id: 5,6
  //   name: 'Rest Country API',
  //   desc: 'A project that displays all information about a country',
  //   stack: 'React JS',
  //   gitHubUrl: {
  //     icon: <GrGithub />,
  //     url: 'https://github.com/Almarex-Web-Dev/rest-countries-api-project',
  //   },
  //   website: {
  //     icon: <TbWorld />,
  //     url: 'https://rest-countries-web-app-project.netlify.app/',
  //   },
  //   imgUrl: restCOuntry,
  // },
  // {
  //   id: 6,
  //   name: 'Huddle Landing Page',
  //   desc: 'A simple landing page website',
  //   stack: 'React js, SCSS',
  //   gitHubUrl: {
  //     icon: <GrGithub />,
  //     url: 'https://github.com/Almarex-Web-Dev/Huddle-landing-page',
  //   },
  //   website: {
  //     icon: <TbWorld />,
  //     url: 'https://huddle-website-project.netlify.app/',
  //   },
  //   imgUrl: huddle,
  // },
  
  
]
