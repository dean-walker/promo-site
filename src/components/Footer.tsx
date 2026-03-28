import { Container } from "@/components/Container";
import { Link } from "next-view-transitions";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="z-50 border-t border-zinc-200/60 bg-white dark:border-zinc-800/60 dark:bg-zinc-950">
      <Container className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-400 dark:text-zinc-600">
          © {year} Dean Walker. Built with Next.js, Tailwind, and Framer Motion.
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <Link
            className="text-zinc-400 hover:text-zinc-600 dark:text-zinc-600 dark:hover:text-zinc-400"
            href="/portfolio"
          >
            Portfolio
          </Link>
          <a
            className="text-zinc-400 hover:text-zinc-600 dark:text-zinc-600 dark:hover:text-zinc-400"
            href="https://github.com/dean-walker"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="text-zinc-400 hover:text-zinc-600 dark:text-zinc-600 dark:hover:text-zinc-400"
            href="https://www.linkedin.com/in/dean-s-walker/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </Container>
    </footer>
  );
}
