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
    description: "",
    tags: [],
    href: "https://resilience-explorer.com/",
    thumbnail: "/portfolio/thumbnails/Rex.jpg",
    images: [
      { src: "/portfolio/rex-landing-1.png", alt: "Resilience Explorer Landing Page" },
      { src: "/portfolio/rex-landing-2.png", alt: "Resilience Explorer Landing Page" },
    ],
  },
  {
    name: "Access NZ",
    description: "",
    tags: [],
    href: "https://access.resilience-explorer.com/",
    thumbnail: "/portfolio/thumbnails/Access.jpg",
    images: [{ src: "/portfolio/access.png", alt: "Access NZ Landing Page" }],
  },
  {
    name: "Ruru",
    description: "",
    tags: [],
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
    tags: [],
    thumbnail: "/portfolio/thumbnails/Game.jpg",
    repo: "https://github.com/dean-walker/climatecards",
    images: [{ src: "/portfolio/card-game.png", alt: "Resilience Cards Game" }],
  },
];
