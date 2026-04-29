"use client";
import { useState, useEffect, useRef } from "react";

/**
 * Animates a number from 0 to `target` when the element enters the viewport.
 *
 * @param {number} target   - The final number to count up to
 * @param {number} duration - Animation duration in ms (default 1800)
 * @param {string} suffix   - Text appended after the number, e.g. "+" or "K+"
 * @returns {{ ref, display }} - Attach `ref` to the element, render `display`
 */
export function useCountUp(target, duration = 1800, suffix = "") {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  // Trigger when element enters viewport
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  // Run the count-up animation
  useEffect(() => {
    if (!started) return;

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [started, target, duration]);

  return { ref, display: `${count}${suffix}` };
}
