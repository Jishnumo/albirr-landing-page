"use client";

import { useEffect } from "react";

/**
 * PageTitle component to dynamically set the browser tab title.
 * Works perfectly in React 19 / Next.js App Router.
 * Uses both client-side useEffect and React 19's native head hoisting for SSR.
 * 
 * @param {Object} props
 * @param {string} props.title - The title of the page (e.g. "About Us")
 */
export default function PageTitle({ title }) {
  useEffect(() => {
    const formattedTitle = title ? `${title} | ALBiRR Schools` : "ALBiRR Schools";
    if (document.title !== formattedTitle) {
      document.title = formattedTitle;
    }
  }, [title]);

  return <title>{title ? `${title} | ALBiRR Schools` : "ALBiRR Schools"}</title>;
}
