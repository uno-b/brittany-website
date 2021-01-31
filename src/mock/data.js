import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'DigiData',
  lang: 'en',
  description: 'Outsource the hard work to us and focus more on growing your company.',
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Brittany Lazo',
  subtitle: 'Founder',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    'My business helps technology startups and digital agencies fill their pipeline with high-value leads that turn into customers. Our customers get an expert team dedicated to prospecting and customer acquisition.',
  paragraphTwo: 'Paragraph two in case info is necessary.',
  paragraphThree: 'Paragraph three in case info is necessary.',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Let us connect and jump on an intro call!',
  btn: "Let's talk",
  email: 'brittany.lazo@digidatainfo.com',
};
