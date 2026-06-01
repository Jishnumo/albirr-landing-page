"use client";

import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  once = true,
}) {
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: 0.18,
    rootMargin: "0px 0px -20% 0px",
  });

  const shouldAnimate = !prefersReducedMotion;

  return (
    <div
      ref={ref}
      className={
        (shouldAnimate
          ? "transition-[opacity,transform] duration-700 "
          : "") +
        (inView || !shouldAnimate
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6") +
        (shouldAnimate && !inView ? " will-change-[opacity,transform]" : "") +
        " " +
        className
      }
      style={
        shouldAnimate
          ? {
              transitionDelay: `${delay}ms`,
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              backfaceVisibility: "hidden",
              WebkitFontSmoothing: "antialiased",
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
