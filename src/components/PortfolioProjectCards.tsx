"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import { MotionDiv } from "@/components/Motion";
import { Carousel } from "@/components/Carousel";
import { BrandIcon } from "@/components/BrandIcon";
import type { PortfolioProject } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import { withBasePath } from "@/lib/basePath";

type Props = {
  projects: PortfolioProject[];
};

export function PortfolioProjectCards({ projects }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const close = useCallback(() => setOpenIndex(null), []);

  const goPrev = useCallback(() => {
    setOpenIndex((i) => {
      if (i === null) return i;
      return i <= 0 ? projects.length - 1 : i - 1;
    });
  }, [projects.length]);

  const goNext = useCallback(() => {
    setOpenIndex((i) => {
      if (i === null) return i;
      return i >= projects.length - 1 ? 0 : i + 1;
    });
  }, [projects.length]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIndex, close, goPrev, goNext]);

  useEffect(() => {
    if (openIndex === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [openIndex]);

  const openProject = projects[openIndex ?? 0];

  return (
    <>
      <div className="mt-10 flex flex-col gap-4">
        {projects.map((p, idx) => (
          <MotionDiv
            key={p.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
            tabIndex={0}
            aria-label={`Open ${p.name} in fullscreen`}
            aria-haspopup="dialog"
            aria-expanded={openIndex === idx}
            onClick={() => setOpenIndex(idx)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setOpenIndex(idx);
              }
            }}
            className={cn(
              "group flex cursor-pointer flex-col gap-4 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition",
              "hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-500",
              "sm:flex-row sm:gap-0 dark:border-zinc-800 dark:bg-zinc-950",
            )}
          >
            <img src={withBasePath(p.thumbnail)} alt={p.name} width={320} height={180} />
            <div className="flex min-w-0 flex-1 flex-col justify-between gap-4 p-4 sm:py-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold tracking-tight">{p.name}</h2>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {p.description}
                  </p>
                </div>
                <div
                  className="flex shrink-0 items-center gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  {p.repo && (
                    <a
                      className="inline-flex size-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-900"
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.name} repository`}
                    >
                      <BrandIcon name="github" />
                    </a>
                  )}
                  {p.href && (
                    <a
                      className="inline-flex size-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-900"
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.name} website`}
                    >
                      <ExternalLink className="size-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </MotionDiv>
        ))}
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {openIndex !== null && openProject && (
              <MotionDiv
                key="portfolio-spotlight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="fixed inset-0 z-200 flex items-center justify-center"
                role="dialog"
                aria-modal="true"
                aria-labelledby="portfolio-fullscreen-title"
              >
                <button
                  type="button"
                  className="absolute inset-0 bg-zinc-950/92 backdrop-blur-sm"
                  aria-label="Close fullscreen"
                  onClick={close}
                />

                <button
                  type="button"
                  className="absolute top-3 right-3 z-20 inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:top-5 md:right-5"
                  aria-label="Close"
                  onClick={close}
                >
                  <X className="size-5" />
                </button>

                <button
                  type="button"
                  className="absolute top-1/2 left-2 z-20 inline-flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:left-4"
                  aria-label="Previous project"
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                >
                  <ChevronLeft className="size-7" />
                </button>

                <button
                  type="button"
                  className="absolute top-1/2 right-2 z-20 inline-flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:right-4"
                  aria-label="Next project"
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                >
                  <ChevronRight className="size-7" />
                </button>

                <MotionDiv
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-4 px-14 py-16 md:px-20"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <h2
                      id="portfolio-fullscreen-title"
                      className="text-xl font-semibold tracking-tight text-white md:text-2xl"
                    >
                      {openProject.name}
                    </h2>
                    <div className="flex items-center gap-2">
                      {openProject.repo && (
                        <a
                          className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                          href={openProject.repo}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${openProject.name} repository`}
                        >
                          <BrandIcon name="github" className="text-white" />
                        </a>
                      )}
                      {openProject.href && (
                        <a
                          className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 [&_svg]:text-white"
                          href={openProject.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${openProject.name} website`}
                        >
                          <ExternalLink className="size-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <Carousel
                    key={openIndex}
                    images={[...openProject.images]}
                    className="w-full overflow-hidden rounded-xl shadow-lg"
                    aspect="16/9"
                    imageFill="contain"
                  />

                  {openProject.description ? (
                    <p className="text-sm leading-6 text-zinc-300">{openProject.description}</p>
                  ) : null}
                </MotionDiv>
              </MotionDiv>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
