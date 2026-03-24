"use client";

import { Link } from "next-view-transitions";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Mail } from "lucide-react";
import { withBasePath } from "@/lib/basePath";
import { cn } from "@/lib/utils";
import { Container } from "@/components/Container";
import { BrandIcon } from "@/components/BrandIcon";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
] as const;

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 overflow-hidden border-b border-zinc-200/60 bg-white/80 backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/60">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={withBasePath("/icon.png")}
            alt="Dean Walker"
            width={48}
            height={48}
            priority
          />
        </Link>

        <nav className="flex items-center gap-1">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-50",
                  active && "bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <a
            className="inline-flex size-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-900"
            href="https://github.com/dean-walker"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <BrandIcon name="github" />
          </a>
          <a
            className="inline-flex size-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-900"
            href="https://www.linkedin.com/in/dean-s-walker/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <BrandIcon name="linkedin" />
          </a>
          <a
            className="inline-flex size-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-900"
            href="mailto:dean.s.walker@outlook.com"
            aria-label="Email"
          >
            <Mail className="size-4" />
          </a>
        </div>
      </Container>
    </header>
  );
}
