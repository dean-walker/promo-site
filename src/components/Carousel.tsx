"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { withBasePath } from "@/lib/basePath";
import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";

type CarouselImage = {
  src: string;
  alt: string;
};

export function Carousel({
  images,
  imageFill = "cover",
  className,
  aspect = "16/9",
}: {
  images: CarouselImage[];
  imageFill?: "cover" | "contain";
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
      <div ref={emblaRef} className="overflow-hidden" style={{ aspectRatio: aspect }}>
        <div className="flex h-full touch-pan-y">
          {images.map((img, i) => (
            <div key={`${img.src}-${i}`} className="relative min-w-0 flex-[0_0_100%]">
              <Image
                src={withBasePath(img.src)}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={cn("object-cover", imageFill === "contain" && "object-contain")}
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {!disableControls && (
        <div className="group absolute inset-0">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canPrev}
            className="absolute top-1/2 left-1 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full text-zinc-800 transition transition-all duration-300 group-hover:left-3 group-hover:bg-white group-hover:bg-white/80 group-hover:shadow-sm group-hover:backdrop-blur disabled:opacity-40 dark:text-zinc-100 dark:group-hover:bg-zinc-950/70 dark:hover:bg-zinc-950"
            aria-label="Previous image"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canNext}
            className="absolute top-1/2 right-1 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full text-zinc-800 transition transition-all duration-300 group-hover:right-3 group-hover:bg-white group-hover:bg-white/80 group-hover:shadow-sm group-hover:backdrop-blur disabled:opacity-40 dark:text-zinc-100 dark:group-hover:bg-zinc-950/70 dark:hover:bg-zinc-950"
            aria-label="Next image"
          >
            <ChevronRight className="size-4" />
          </button>

          <div className="absolute right-0 -bottom-2 left-0 flex items-end justify-center gap-2 bg-gradient-to-t from-black/80 to-transparent px-6 pt-12 pb-3 opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => emblaApi?.scrollTo(i)}
                className={cn(
                  "h-1.5 w-6 rounded-full bg-white/35 transition hover:bg-white/55",
                  i === index && "bg-white",
                )}
                aria-label={`Go to image ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
