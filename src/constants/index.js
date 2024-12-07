import {
  aws,
  typescript,
  nodejs,
  python,
  java,
  reactjs,
  tailwind,
  mongodb,
  git,
  docker,
  threejs,
  itf,
  a,
  network,
  cios,
  rot,
  linkedin
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  }
];

const technologies = [
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "AWS",
    icon: aws,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const services = [
  {
    title: "Comptia ITF+",
    icon: itf,
  },
  {
    title: "Comptia A+",
    icon: a,
  },
  {
    title: "Comptia Network+",
    icon: network,
  },
  {
    title: "Comptia CIOS",
    icon: cios,
  },

];

const projects = [
  {
    name: "ROT",
    description:
      "A Minecraft Bedrock Edition essentials addon that adds custom commands and features into the game. This project has reach 108 thousand downloads world-wide and ended in 2023.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: rot,
    source_code_link: "https://github.com/ROT-Utilities/ROT",
  },
];


const platforms = [
  {
    title: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/bryan-athanas-6a8bb4314/",
  }
];

export { services, technologies, projects, platforms };
