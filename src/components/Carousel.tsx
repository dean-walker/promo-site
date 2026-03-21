"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";

type CarouselImage = {
  src: string;
  alt: string;
};

export function Carousel({
  images,
  className,
  aspect = "16/9",
}: {
  images: CarouselImage[];
  className?: string;
  aspect?: `${number}/${number}`;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [index, setIndex] = useState(0);

  const canPrev = emblaApi?.canScrollPrev() ?? true;
  const canNext = emblaApi?.canScrollNext() ?? true;
  const disableControls = useMemo(() => images.length <= 1, [images]);

  useEffect(() => {
    // Defer state update to avoid synchronous setState in an effect.
    const rafId = requestAnimationFrame(() => {
      setIndex(emblaApi?.selectedScrollSnap() ?? 0);
    });
    return () => cancelAnimationFrame(rafId);
  }, [emblaApi]);

  return (
    <div className={cn("relative", className)}>
      <div
        ref={emblaRef}
        className="overflow-hidden"
        style={{ aspectRatio: aspect }}
      >
        <div className="flex h-full touch-pan-y">
          {images.map((img, i) => (
            <div key={`${img.src}-${i}`} className="relative min-w-0 flex-[0_0_100%]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {!disableControls && <><button
        type="button"
        onClick={() => emblaApi?.scrollPrev()}
        disabled={!canPrev}
        className="absolute left-3 top-1/2 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white/80 text-zinc-800 shadow-sm backdrop-blur transition hover:bg-white disabled:opacity-40 dark:border-zinc-800 dark:bg-zinc-950/70 dark:text-zinc-100 dark:hover:bg-zinc-950"
        aria-label="Previous image"
      >
        <ChevronLeft className="size-4" />
      </button>
      <button
        type="button"
        onClick={() => emblaApi?.scrollNext()}
        disabled={!canNext}
        className="absolute right-3 top-1/2 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white/80 text-zinc-800 shadow-sm backdrop-blur transition hover:bg-white disabled:opacity-40 dark:border-zinc-800 dark:bg-zinc-950/70 dark:text-zinc-100 dark:hover:bg-zinc-950"
        aria-label="Next image"
      >
        <ChevronRight className="size-4" />
      </button></>}

      <div className="mt-3 flex items-center justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => emblaApi?.scrollTo(i)}
            className={cn(
              "h-1.5 w-6 rounded-full bg-zinc-200 transition hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700",
              i === index && "bg-zinc-900 dark:bg-zinc-200",
            )}
            aria-label={`Go to image ${i + 1}`}
            aria-current={i === index ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
