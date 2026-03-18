import { Container } from "@/components/Container";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/60 bg-white dark:border-zinc-800/60 dark:bg-zinc-950">
      <Container className="flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          © {year} Dean Walker. Built with Next.js, Tailwind, and Framer Motion.
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <Link
            className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            href="/portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            href="/contact"
          >
            Contact
          </Link>
          <a
            className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            href="https://github.com/your-handle"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </Container>
    </footer>
  );
}

