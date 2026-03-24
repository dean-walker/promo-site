import { Container } from "@/components/Container";
import { PortfolioProjectCards } from "@/components/PortfolioProjectCards";
import { Link } from "next-view-transitions";
import { portfolioProjects } from "@/data/portfolio";

export default function PortfolioPage() {
  return (
    <Container className="py-12 sm:py-16">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Portfolio</h1>
        <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
          A few of my past publicly available projects. The majority are covered by NDA, but I'm
          happy to share more details if you're interested.
        </p>
      </header>

      <PortfolioProjectCards projects={portfolioProjects} />

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
