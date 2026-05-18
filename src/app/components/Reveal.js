"use client";

import { useInView } from "react-intersection-observer";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  once = false,
}) {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: 0.14,
    rootMargin: "0px 0px -15% 0px",
  });

  return (
    <div
      ref={ref}
      className={
        "transition-[opacity,transform,filter] duration-900 will-change-transform " +
        (inView
          ? "opacity-100 translate-y-0 blur-0"
          : "opacity-0 translate-y-10 blur-[3px]") +
        " " +
        className
      }
      style={{
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {children}
    </div>
  );
}
