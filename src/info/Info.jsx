import mock1 from '../img/mock1.png'
import mock2 from '../img/mock2.png'
import mock3 from '../img/mock3.png'
import mock4 from '../img/mock4.png'
import mock5 from '../img/mock5.png'
import self from '../img/self.png'

export let colors = ['rgb(0,255,164)', 'rgb(166,104,255)']

/*
 a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors.
*/

export const info = {
  firstName: 'Suraj',
  lastName: 'Gupta',
  initials: 'SG',
  position: 'a Full Stack Developer',
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: '☕',
      text: 'fueled by coffee',
    },
    {
      emoji: '🌎',
      text: 'based in the India',
    },
    {
      emoji: '💼',
      text: 'Full Stack Developer',
    },
    {
      emoji: '📧',
      text: 'surajgupta3940@gmail.com',
    },
  ],
  socials: [
    {
      link: 'https://github.com/builtbysuraj',
      icon: 'fa-brands fa-github',
      label: 'github',
    },
    {
      link: 'https://linkedin.com/in/builtbysuraj',
      icon: 'fa-brands fa-linkedin',
      label: 'linkedin',
    },
    {
      link: 'https://twitter.com/builtbysuraj',
      icon: 'fa-brands fa-twitter',
      label: 'twitter',
    },
  ],
  bio: "Hello! I'm Suraj. I'm an experienced full-stack developer. I studied CompSci at University of Calcutta",
  skills: {
    proficientWith: [
      'javascript',
      'typescript',
      'react',
      'nextjs',
      'redux',
      'git',
      'github',
      'html5',
      'css3',
      'tailwind',
      'bootstrap',
      'mongodb',
      'express',
      'mongoose',
      'linux',
      'nodejs',
    ],
    exposedTo: [
      'vue',
      'react native',
      'mysql',
      'android',
      'react testing library',
      'jest',
    ],
  },
  hobbies: [
    {
      label: 'reading',
      emoji: '📖',
    },
    {
      label: 'theater',
      emoji: '🎭',
    },
    {
      label: 'movies',
      emoji: '🎥',
    },
    {
      label: 'gaming',
      emoji: '🎮',
    },
  ],
  portfolio: [
    {
      title: 'CRYPTO TRACKER',
      live: 'https://r-crypt.netlify.app/',
      source: 'https://github.com/builtbysuraj/crypto',
      image: mock1,
    },
    {
      title: 'WHEATHER APP',
      live: 'https://weather-app-rho-rose-81.vercel.app/',
      source: 'https://github.com/builtbysuraj/weather-app',
      image: mock2,
    },
    {
      title: 'QUIZ APP',
      live: 'https://quiz-typescript-beta.vercel.app/',
      source: 'https://github.com/builtbysuraj/quiz-typescript',
      image: mock3,
    },
    {
      title: 'MOVIE SEARCH APP',
      live: 'https://builtbysuraj.github.io/movie-search/',
      source: 'https://github.com/builtbysuraj/movie-search',
      image: mock4,
    },
    {
      title: 'Project 5',
      live: 'https://paytonpierce.dev',
      source: 'https://github.com/paytonjewell',
      image: mock5,
    },
  ],
}
