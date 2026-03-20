import { ArrowRight, Code2, Pin, Sparkles, Wrench } from "lucide-react";
import { Container } from "@/components/Container";
import { MotionDiv } from "@/components/Motion";
import { Link } from "next-view-transitions";

export default function Home() {
  return (
    <div className="relative overflow-hidden flex-1">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Top marquee track */}
        <MotionDiv
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute -top-24 left-0 right-0 h-72"
        >
          <MotionDiv
            className="absolute left-0 top-0 flex h-full w-[200%]"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 54, repeat: Infinity, ease: "linear", elapsed: 34000 }}
          >
            <div className="relative h-full w-1/2">
              <div className="absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/20 via-fuchsia-500/20 to-cyan-500/20 blur-3xl" />
            </div>
            <div className="relative h-full w-1/2">
              <div className="absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/20 via-fuchsia-500/20 to-cyan-500/20 blur-3xl" />
            </div>
          </MotionDiv>
        </MotionDiv>

        {/* Bottom marquee track */}
        <MotionDiv
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute -bottom-28 left-0 right-0 h-72"
        >
          <MotionDiv
            className="absolute left-0 top-0 flex h-full w-[200%]"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 36, repeat: Infinity, ease: "linear", elapsed: 30000 }}
          >
            <div className="relative h-full w-1/2">
              <div className="absolute left-1/2 top-0 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-500/15 via-sky-500/15 to-violet-500/15 blur-3xl" />
            </div>
            <div className="relative h-full w-1/2">
              <div className="absolute left-1/2 top-0 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-500/15 via-sky-500/15 to-violet-500/15 blur-3xl" />
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>

      <Container className="py-14 sm:py-20">
        <section className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
              <Pin className="size-3.5" />
              Available for full-time work in Australia
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Hi, I’m <span className="text-indigo-600 dark:text-green-400">Dean Walker</span>.
              <br />I build polished web solutions.
            </h1>
            <p className="max-w-prose text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-300">
              I take pride in excelling in a versatile environment, and love working with a team to
              build beautiful and performant products.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/portfolio"
                className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-5 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                View portfolio <ArrowRight className="ml-2 size-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 bg-white px-5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900"
              >
                Contact
              </Link>
            </div>

            <dl className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
                <dt className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Focus</dt>
                <dd className="mt-1 text-sm font-semibold">Frontend + UX</dd>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
                <dt className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Stack</dt>
                <dd className="mt-1 text-sm font-semibold">Next.js / TS</dd>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
                <dt className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Location</dt>
                <dd className="mt-1 text-sm font-semibold">Remote</dd>
              </div>
            </dl>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-indigo-600/10 text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-300">
                  <Code2 className="size-5" />
                </span>
                <h2 className="text-sm font-semibold">Product-minded builds</h2>
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                Clean architecture, fast pages, and details that make interfaces feel premium.
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-emerald-600/10 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                  <Wrench className="size-5" />
                </span>
                <h2 className="text-sm font-semibold">Modern toolchain</h2>
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                Next.js, Tailwind, Motion, and a few small utilities to keep the UI crisp.
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 sm:col-span-2">
              <h2 className="text-sm font-semibold">Tech highlights</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Next.js App Router",
                  "React 19",
                  "Tailwind CSS v4",
                  "TypeScript",
                  "Framer Motion",
                  "ESLint",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                Want to see more? Head to the portfolio page for a few sample case studies.
              </p>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
