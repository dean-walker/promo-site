import { ExternalLink } from "lucide-react";
import { Container } from "@/components/Container";
import { MotionDiv } from "@/components/Motion";
import { Carousel } from "@/components/Carousel";
import { Link } from "next-view-transitions";
import { BrandIcon } from "@/components/BrandIcon";

interface Project {
  name: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
  images: { src: string; alt: string }[];
}

const projects: Project[] = [
  {
    name: "Resilience Explorer",
    description: "",
    tags: [],
    href: "https://resilience-explorer.com/",
    images: [{ src: "./portfolio/rex-landing-1.png", alt: "Resilience Explorer Landing Page" },
      { src: "./portfolio/rex-landing-2.png", alt: "Resilience Explorer Landing Page" },
    ],
  },
  {
    name: "Access NZ",
    description:
      "",
    tags: [],
    href: "https://access.resilience-explorer.com/",
    images: [
      { src: "./portfolio/access.png", alt: "Access NZ Landing Page" },
    ],
  },
  {
    name: "Ruru",
    description:
      "",
    tags: [],
    repo: "https://github.com/dean-walker/ruru",
    images: [
      { src: "./portfolio/ruru-1.png", alt: "Ruru Landing Page" },
      { src: "./portfolio/ruru-2.png", alt: "Ruru Landing Page" },
    ],
  },
  {
    name: "Resilience Cards",
    description:
      "",
    tags: [],
    repo: "https://github.com/dean-walker/climatecards",
    images: [
      { src: "./portfolio/card-game.png", alt: "Resilience Cards Game" },
    ],
  },
] as const;

export default function PortfolioPage() {
  return (
    <Container className="py-12 sm:py-16">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Portfolio</h1>
        <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
          A few of my past publicly available projects. The majority are covered by NDA, but I'm happy to share more details if you're interested.
        </p>
      </header>

      <div className="mt-10 flex flex-col gap-4">
        {projects.map((p, idx) => (
          <MotionDiv
            key={p.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
            className="overflow-hidden flex gap-4 group rounded-xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
          >
            <Carousel images={[...p.images]} className="flex-1 max-w-1/3 border-r border-zinc-200 dark:border-zinc-800" aspect="14/9" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold tracking-tight">{p.name}</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {p.description}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {p.repo && <a
                  className="inline-flex size-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-900"
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.name} repository`}
                >
                  <BrandIcon name="github" />
                </a>}
                {p.href && <a
                  className="inline-flex size-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-900"
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.name} website`}
                >
                  <ExternalLink className="size-4" />
                </a>}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </MotionDiv>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
        <h3 className="text-base font-semibold tracking-tight">Next up</h3>
        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          Add screenshots, short case studies, and real metrics (perf, conversion, time-to-ship).
          Keep it scannable.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-5 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Let’s talk
        </Link>
      </div>
    </Container>
  );
}
