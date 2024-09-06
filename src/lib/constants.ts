import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/ridarlar',
  linkedin: 'https://www.linkedin.com/in/richardaguillar/',
  mail: 'mailto:richard.aguilar.2020@hotmail.com',
  twitter: 'https://x.com/ridarlar',
  medium: 'https://google.com',
  discord: 'https://discordapp.com/users/798959149760118854',
}

// Global
export const SITE: Site = {
  TITLE: 'Richard Aguilar',
  DESCRIPTION:
    'Bienvenido a mi portfolio y blog.',
  AUTHOR: 'Richard Aguilar',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Lugares donde trabaje.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Escribiendo sobre temas que me gustan.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Mis proyectos personales.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Busca todo lo que publico.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Tecnólogo superior en desarrollo de software.',
    institution: 'ITS Japón',
    link: 'https://itsjapon.edu.ec/',
    date: '2022 - 2024',
  },
  {
    title: '...',
    institution: 'Udemy',
    link: 'https://www.udemy.com/',
    date: '2020 - 2021',
  },
  {
    title: '...',
    institution: 'Youtube',
    link: 'https://www.youtube.com/@FaztTech',
    date: '2020 - 2022',
  },
]

export const POSTSLIST = [
  {
    key: 'dfj324jtr9328fj',
    date: '2024',
    title: 'Some title',
    keywords: 'Linux',
    resume: 'Loremdojkygykjuguiyg kuygikuyguyguygkuygkuygkuygikuy guygiuygiuyi giuygouyguyguygiuygoiuy hoiuhpiuhoiuhol',
    body: 'j;oj0cv9wqjref0qj243fgq3j94g0qj943gq;',
    link: '/'
  }
  ,
  {
    key: 'dfj324jtr9kjhlk328fj',
    date: '2024',
    title: 'Some title',
    keywords: 'Linux',
    resume: 'Loremdojkf qhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhoie0fjqp ofijq;oweif',
    body: 'j;oj0cv9wqjref0qj243fgq3j94g0qj943gq;',
    link: '/'
  }
]


export const EXPERIENCE = [
  {
    company: 'Tinguar',
    location: 'Santo Domingo, Ecuador',
    position: 'Web developer',
    link: 'https://tinguar.com/',
    start: '2023',
    end: '2024',
    tasks: [
      'Desarrollo en Wordpress',
      'Desarrollo mobile',
      'Marketing social media',
    ],
  },
  {
    company: 'Tinkin',
    location: 'Quito, Ecuador',
    position: 'FullStack software Engineer',
    start: '2022',
    link: 'https://www.tinkin.one/',
    end: '2023',
    tasks: [
      'Desarrollar requisitos',
      'Presentaciones con clientes',
      'Pair programming',
      'Tesiting',
      'Scrum',
    ],
  },
  {
    company: 'Eina Fundation',
    location: 'Quito, Ecuador',
    position: 'FullStack software Engineer',
    start: '2020',
    link: 'https://www.tinkin.one/',
    end: '2021',
    tasks: [
      'Desarrollar producto interno',
      'Presentaciones con clientes',
    ],
  },
]
