"use client";
import { useEffect, useRef } from "react";

/**
 * Returns a ref to attach to any element.
 * When that element enters the viewport, the `data-revealed` attribute is set,
 * triggering CSS transitions defined via the `data-reveal` attribute.
 *
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - 0–1, fraction visible before triggering
 * @param {string} options.rootMargin - margin around root
 */
export function useScrollReveal({ threshold = 0.12, rootMargin = "0px 0px -40px 0px" } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute("data-revealed", "true");
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
