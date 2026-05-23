import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

export type Industry = {
  title: string;
  /** A CSS background — gradient, color, or layered image. */
  background: string;
  accent?: string;
};

type IndustriesCarouselProps = {
  items: Industry[];
  ariaLabel?: string;
  direction?: "ltr" | "rtl";
};

const CARD_WIDTH_PX = 360;
const CARD_GAP_PX = 24;

export function IndustriesCarousel({ items, ariaLabel, direction = "ltr" }: IndustriesCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [maxOffset, setMaxOffset] = useState(0);

  const cards = useMemo(() => items, [items]);

  useEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      const track = trackRef.current;
      if (!container || !track) return;

      const trackWidth = track.scrollWidth;
      const viewport = container.clientWidth;
      if (!viewport || !Number.isFinite(viewport)) {
        setTotalPages(1);
        return;
      }
      const overflow = Math.max(0, trackWidth - viewport);
      const pages = Math.max(1, Math.min(20, Math.ceil((overflow + viewport) / viewport)));
      setMaxOffset(overflow);
      setTotalPages(pages);
      setPage(0);
      controls.start({ x: 0, transition: { duration: 0 } });
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [cards, controls]);

  const goTo = (next: number) => {
    const clamped = Math.max(0, Math.min(totalPages - 1, next));
    const container = containerRef.current;
    if (!container) return;
    const viewport = container.clientWidth;
    const target = Math.min(maxOffset, clamped * viewport);
    setPage(clamped);
    const signed = direction === "rtl" ? target : -target;
    controls.start({ x: signed, transition: { type: "spring", stiffness: 70, damping: 18 } });
  };

  return (
    <div aria-label={ariaLabel} className="w-full">
      <div className="mb-6 flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={() => goTo(page - 1)}
          aria-label="Previous"
          className="grid h-10 w-10 place-items-center rounded-full border border-[#D5E7E6] bg-white text-[#0D2B33] transition hover:border-[#16B8AE] hover:text-[#16B8AE] disabled:opacity-30"
          disabled={page === 0}
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => goTo(page + 1)}
          aria-label="Next"
          className="grid h-10 w-10 place-items-center rounded-full border border-[#D5E7E6] bg-white text-[#0D2B33] transition hover:border-[#16B8AE] hover:text-[#16B8AE] disabled:opacity-30"
          disabled={page >= totalPages - 1}
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div ref={containerRef} className="relative overflow-hidden">
        <motion.div
          ref={trackRef}
          animate={controls}
          className="flex"
          style={{ gap: `${CARD_GAP_PX}px` }}
        >
          {cards.map((item) => (
            <article
              key={item.title}
              className="relative shrink-0 overflow-hidden rounded-[28px] shadow-[0_18px_40px_rgba(13,43,51,0.08)]"
              style={{ width: `${CARD_WIDTH_PX}px`, height: "420px", background: item.background }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,32,39,0)_45%,rgba(7,32,39,0.55)_100%)]" />
              <div className="relative flex h-full flex-col justify-start p-6">
                <h3 className="text-2xl font-semibold tracking-[-0.02em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </motion.div>
      </div>

      <div className="mt-8 flex w-full max-w-md items-center gap-1.5">
        {Array.from({
          length: Number.isFinite(totalPages) ? Math.max(1, Math.min(20, totalPages)) : 1,
        }).map((_, idx) => {
          const active = idx === page;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => goTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#E8F2F2]"
            >
              <span
                aria-hidden
                className="block h-full w-full origin-left transition-transform duration-500"
                style={{
                  transform: active ? "scaleX(1)" : "scaleX(0)",
                  background:
                    "linear-gradient(90deg, #40E0D0 0%, #16B8AE 50%, #0D2B33 100%)",
                }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
