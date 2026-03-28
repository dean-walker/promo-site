export type PortfolioProject = {
  name: string;
  description: string;
  thumbnail: string;
  tags: string[];
  href?: string;
  repo?: string;
  images: { src: string; alt: string }[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    name: "Resilience Explorer",
    description:
      "The Resilience Explorer is a complex, geospatial web application that allows clients to explore the exposure of their assets to various natural hazards. Built over the course of three years, it grew into our flagship product, designed to be modular, scalable, and easily maintainable.\n\nI was responsible for the full stack development of the project for years, alongside a team of 3-4 other developers. This included everything from big data processing and storage, to JWT protected API endpoints, to front end UI/UX.\n\nI'm very proud of the work I did on this project. It was a natural evolution of my earlier projects for Urban Intelligence, as it combined their functionality into a single, cohesive product.",
    tags: [
      "React",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Framer Motion",
      "Mapbox",
      "PostgresQL",
      "Express",
      "Axios",
      "Node",
      "Docker",
      "AWS: Cognito, S3, Lambda, CloudFront",
      "CI/CD",
    ],
    href: "https://resilience-explorer.com/",
    thumbnail: "/portfolio/thumbnails/Rex.jpg",
    images: [
      { src: "/portfolio/rex-landing-1.png", alt: "Resilience Explorer Landing Page" },
      { src: "/portfolio/rex-landing-2.png", alt: "Resilience Explorer Landing Page" },
    ],
  },
  {
    name: "Access NZ",
    description:
      "A sister platform to Resilience Explorer, that displays transport access to amenities and services across New Zealand, and is freely available for public use. As the primary developer for this project, I was responsible for the full stack development, including the API, the frontend, and the database.\n\nAs part of furthering the modernization of our technology stack, I took initiative to propose and then impliment Nuxt (Vue) rather than React, which improved the project structure and its subsequent maintainability.",
    tags: [
      "Nuxt",
      "Vue",
      "Pinia",
      "TypeScript",
      "Mapbox",
      "PostgresQL",
      "Express",
      "Axios",
      "Node",
      "Docker",
      "AWS: Cognito, S3, Lambda, CloudFront",
      "CI/CD",
    ],
    href: "https://access.resilience-explorer.com/",
    thumbnail: "/portfolio/thumbnails/Access.jpg",
    images: [{ src: "/portfolio/access.png", alt: "Access NZ Landing Page" }],
  },
  {
    name: "Ruru",
    description:
      'Ruru is a project management tool that I initially built as a pet project, out of frustration with the verbosity and lack of customizability of Github\'s own Slack integration. As time went on, it grew into a flexible, multi-faceted integretion tool connecting most of our project management tools both to Slack and to each other.\n\nAfter a couple years of pro-bono development, Ruru become a core part of the workflow for the developer, analyst, and project manager teams at Urban Intelligence, and accordingly the company chose to sponsor its development ever since.\n\nRecently, I added a Vue-based "Projects Overview" dashboard to the project, using JWT authentication to protect it from unauthorized access. It allowed users to easily transfer projects between Basecamp, Runn and Hubspot, and customize them as they did so.',
    tags: [
      "Vue",
      "Vite",
      "Pinia",
      "Express",
      "Node",
      "Slack API",
      "Github API",
      "Basecamp API",
      "Hubspot API",
      "Runn API",
    ],
    repo: "https://github.com/dean-walker/ruru",
    thumbnail: "/portfolio/thumbnails/Ruru.jpg",
    images: [
      { src: "/portfolio/ruru-1.png", alt: "Ruru Landing Page" },
      { src: "/portfolio/ruru-2.png", alt: "Ruru Landing Page" },
    ],
  },
  {
    name: "Resilience Cards",
    description:
      "Resilience Cards is a simple game that I built as a side project. It was inspired by my learnings on climate resilience from my time in Urban Intelligence, and gamified the concept of building and protecting a city from regular disasters. It featured a simple terrain generator, a deck of cards with various climate resilience/financial actions, and randomly generated disaster events.\n\nIt went on to receive very positive feedback from resilience experts with priorexperience developing serious games for the public sector.",
    tags: ["React", "TypeScript"],
    thumbnail: "/portfolio/thumbnails/Game.jpg",
    repo: "https://github.com/dean-walker/climatecards",
    images: [{ src: "/portfolio/card-game.png", alt: "Resilience Cards Game" }],
  },
];
