import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Container } from "@/components/Container";
import { MotionDiv } from "@/components/Motion";
import { Carousel } from "@/components/Carousel";

const projects = [
  {
    name: "Telemetry Dashboard",
    description:
      "A fast, filterable analytics UI with realtime updates and clean data viz. (placeholder)",
    tags: ["Next.js", "Postgres", "Charts", "Realtime"],
    href: "https://example.com",
    repo: "https://github.com/your-handle/telemetry-dashboard",
    images: [
      { src: "/globe.svg", alt: "Dashboard overview" },
      { src: "/window.svg", alt: "Realtime chart view" },
      { src: "/file.svg", alt: "Export and reports" },
    ],
  },
  {
    name: "Booking Flow",
    description:
      "Mobile-first booking checkout with payment step, validation, and resilient edge cases. (placeholder)",
    tags: ["React", "TypeScript", "Forms", "UX"],
    href: "https://example.com",
    repo: "https://github.com/your-handle/booking-flow",
    images: [
      { src: "/window.svg", alt: "Mobile booking step" },
      { src: "/globe.svg", alt: "Availability selection" },
      { src: "/vercel.svg", alt: "Confirmation view" },
    ],
  },
  {
    name: "Design System Starter",
    description:
      "A small component library with sensible tokens, variants, and accessibility baked in. (placeholder)",
    tags: ["Tailwind", "A11y", "Components"],
    href: "https://example.com",
    repo: "https://github.com/your-handle/design-system-starter",
    images: [
      { src: "/file.svg", alt: "Component docs" },
      { src: "/next.svg", alt: "Tokens and themes" },
      { src: "/window.svg", alt: "Variants and states" },
    ],
  },
] as const;

export default function PortfolioPage() {
  return (
    <Container className="py-12 sm:py-16">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Portfolio
        </h1>
        <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
          A few samples with placeholder links. Swap in real URLs, screenshots,
          and writeups when you’re ready.
        </p>
      </header>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {projects.map((p, idx) => (
          <MotionDiv
            key={p.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
            className="group rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
          >
            <Carousel images={[...p.images]} className="mb-5" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold tracking-tight">
                  {p.name}
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {p.description}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  className="inline-flex size-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-900"
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.name} repository`}
                >
                  <Github className="size-4" />
                </a>
                <a
                  className="inline-flex size-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-900"
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.name} website`}
                >
                  <ExternalLink className="size-4" />
                </a>
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
          Add screenshots, short case studies, and real metrics (perf, conversion,
          time-to-ship). Keep it scannable.
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

