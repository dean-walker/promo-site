import { ArrowRight, ChevronRight, Mail, Pin } from "lucide-react";
import { BrandIcon } from "@/components/BrandIcon";
import { withBasePath } from "@/lib/basePath";
import { Container } from "@/components/Container";
import { MotionDiv } from "@/components/Motion";
import { Link } from "next-view-transitions";
import Image from "next/image";

const socialLinks = [
  {
    name: "GitHub",
    handle: "@dean-walker",
    href: "https://github.com/dean-walker",
  },
  {
    name: "LinkedIn",
    handle: "Dean Walker",
    href: "https://www.linkedin.com/in/dean-s-walker/",
  },
  {
    name: "Gmail",
    handle: "dean.s.walker@outlook.com",
    href: "mailto:dean.s.walker@outlook.com",
  },
] as const;

export default function Home() {
  return (
    <div className="relative flex-1 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Top marquee track */}
        <MotionDiv
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute -top-24 right-0 left-0 h-72"
        >
          <MotionDiv
            className="absolute top-0 left-0 flex h-full w-[200%]"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 54, repeat: Infinity, ease: "linear", elapsed: 34000 }}
          >
            <div className="relative h-full w-1/2">
              <div className="absolute top-0 left-1/2 h-72 w-160 -translate-x-1/2 rounded-full bg-linear-to-r from-indigo-500/20 via-fuchsia-500/20 to-cyan-500/20 blur-3xl" />
            </div>
            <div className="relative h-full w-1/2">
              <div className="absolute top-0 left-1/2 h-72 w-160 -translate-x-1/2 rounded-full bg-linear-to-r from-indigo-500/20 via-fuchsia-500/20 to-cyan-500/20 blur-3xl" />
            </div>
          </MotionDiv>
        </MotionDiv>

        {/* Bottom marquee track */}
        <MotionDiv
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute right-0 -bottom-28 left-0 h-72"
        >
          <MotionDiv
            className="absolute top-0 left-0 flex h-full w-[200%]"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 36, repeat: Infinity, ease: "linear", elapsed: 30000 }}
          >
            <div className="relative h-full w-1/2">
              <div className="absolute top-0 left-1/2 h-72 w-176 -translate-x-1/2 rounded-full bg-linear-to-r from-emerald-500/15 via-sky-500/15 to-violet-500/15 blur-3xl" />
            </div>
            <div className="relative h-full w-1/2">
              <div className="absolute top-0 left-1/2 h-72 w-176 -translate-x-1/2 rounded-full bg-linear-to-r from-emerald-500/15 via-sky-500/15 to-violet-500/15 blur-3xl" />
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>

      <Container className="py-14 sm:py-24">
        <section className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
              <Pin className="size-3.5" />
              Available for full-time work in Australia
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Hi, I’m <span className="text-indigo-600 dark:text-green-400">Dean Walker</span>.
              <br />I build polished web solutions.
            </h1>
            <p className="max-w-prose text-base leading-7 text-pretty text-zinc-600 dark:text-zinc-300">
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
            </div>
          </div>
          <div className="flex h-full w-full py-10">
            <MotionDiv
              initial={{ opacity: 0, filter: "blur(2px)", scale: 0.97 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative mx-auto size-40 sm:size-64"
            >
              <Image
                src={withBasePath("/Profile.jpg")}
                alt="Dean Walker profile photo"
                fill
                sizes="(max-width: 640px) 160px, 192px"
                className="rounded-full object-cover opacity-20"
                style={{ animation: "blurPulse 8s ease-in-out infinite" }}
                priority
              />
              <Image
                src={withBasePath("/Profile.jpg")}
                alt="Dean Walker profile photo"
                fill
                sizes="(max-width: 640px) 160px, 192px"
                className="rounded-full object-cover opacity-80"
                priority
              />
              <Image
                src={withBasePath("/Profile.png")}
                alt="Dean Walker profile photo"
                fill
                sizes="(max-width: 640px) 160px, 192px"
                className="rounded-full object-cover"
                priority
              />
            </MotionDiv>
          </div>
        </section>
      </Container>

      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socialLinks.map((social, idx) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              <MotionDiv
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.05 + idx * 0.05 }}
                className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
                    {social.name === "GitHub" ? (
                      <BrandIcon name="github" className="size-5" />
                    ) : social.name === "LinkedIn" ? (
                      <BrandIcon name="linkedin" className="size-5" />
                    ) : (
                      <Mail className="size-5" />
                    )}
                  </span>
                  <div>
                    <h2 className="text-base font-semibold tracking-tight">{social.name}</h2>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{social.handle}</p>
                  </div>

                  <div className="flex grow justify-end">
                    <span className="inline-flex size-9 items-center justify-center rounded-full text-zinc-700 transition group-hover:bg-zinc-100 dark:text-zinc-200 dark:group-hover:bg-zinc-900">
                      <ChevronRight className="size-5" />
                    </span>
                  </div>
                </div>
              </MotionDiv>
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
}
