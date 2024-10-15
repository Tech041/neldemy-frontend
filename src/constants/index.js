import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  olliepickett,
  onet,
  starlight,
  dateme,
  mikeshop,
  mikecollection,
  threejs,
  josh,
  mimi,
  avatar,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Nextjs Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "Freelancer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Fiverr (Freelancing)",
    icon: "",
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Collaborated with UX/UI designers to translate design mockups into pixel-perfect, responsive interfaces, ensuring a consistent and visually appealing user experience across devices.",
      "Implemented server-side rendering (SSR) and static site generation (SSG) using Next.js, enhancing the application's performance and SEO capabilities",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Upwork (Freelancing)",
    icon: "",
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Developed and maintained various modules of a complex web application, employing React.js/Next.js and TypeScript for the frontend and consumed .Net, Django, Spring Boot and REST APIs  ",
      "Integrated third-party APIs and services to extend application functionalities, improving the overall user experience. ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Isaac has proven to be one of the best, creative and passionate Software developers in Fiverr",
    name: "James Kelvin",
    designation: "Digital Marketer",
    company: "Headstart",
    image: avatar,
  },
  {
    testimonial:
      "After Isaac optimized our website, we gained more traffic by 70%. We can't thank him enough!",
    name: "Mercy Dave",
    designation: "Product Manager",
    company: "Osetty",
    image: avatar,
  },
];

const projects = [
  {
    name: "Dateme",
    description:
      "Dateme is a web dating application that allows users from different countries or continent to find love, make friends and meet new people. It makes it easier to find soul mate ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: dateme,
    source_code_link: "",
    live_demo_link: "http://dateme.onrender.com",
  },
  {
    name: "E-Shop",
    description:
      "E-Shop is an ecommerce web application that enables users to buy different electronic devices such as phones, laptops, watch, headphones e.t.c at their comfort of their homes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "typeScript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: mikeshop,
    source_code_link: "",
    live_demo_link: "https://just-electronics.onrender.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
