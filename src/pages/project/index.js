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
  {
    id: 3,
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
  // {
  //   id: 4,
  //   name: 'Hotel Booking Project',
  //   desc: 'A complicated project that enhanced my skills a lot',
  //   stack: 'React JS',
  //   gitHubUrl: {
  //     icon: <GrGithub />,
  //     url: 'https://github.com/Almarex-Web-Dev/React-booking-project',
  //   },
  //   website: {
  //     icon: <TbWorld />,
  //     url: 'https://react-booking-project.netlify.app/',
  //   },
  //   imgUrl:
  //     'https://cdn.dribbble.com/userupload/2512424/file/original-03f9f265f9a4adbd54644841930518a1.png?compress=1&resize=320x240&vertical=top',
  // },

  // {
  //   id: 5,
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
  {
    id: 6,
    name: 'Huddle Landing Page',
    desc: 'A simple landing page website',
    stack: 'React js, SCSS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Almarex-Web-Dev/Huddle-landing-page',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://huddle-website-project.netlify.app/',
    },
    imgUrl: huddle,
  },
  {
    id: 4,
    name: 'Hotel Booking Project',
    desc: 'A complicated project that enhanced my skills a lot',
    stack: 'React JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Almarex-Web-Dev/React-booking-project',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://react-booking-project.netlify.app/',
    },
    imgUrl:
      'https://cdn.dribbble.com/userupload/2512424/file/original-03f9f265f9a4adbd54644841930518a1.png?compress=1&resize=320x240&vertical=top',
  },
  
]
