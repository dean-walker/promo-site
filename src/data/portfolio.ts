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
      "The Resilience Explorer is a complex, geospatial web application that allows clients to explore the exposure of their assets to various natural hazards.",
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
      "A sister platform to Resilience Explorer, that displays access to amenities and services across New Zealand.",
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
    description: "",
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
    description: "",
    tags: ["React", "TypeScript"],
    thumbnail: "/portfolio/thumbnails/Game.jpg",
    repo: "https://github.com/dean-walker/climatecards",
    images: [{ src: "/portfolio/card-game.png", alt: "Resilience Cards Game" }],
  },
];
