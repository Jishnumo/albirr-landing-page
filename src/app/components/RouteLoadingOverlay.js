"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

// Shows a loader briefly on every route change (including instant prefetch navigations).
export default function RouteLoadingOverlay({ minDurationMs = 450 }) {
  const pathname = usePathname();

  const [visible, setVisible] = useState(false);
  const hideTimerRef = useRef(null);

  useEffect(() => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }

    setVisible(true);

    hideTimerRef.current = setTimeout(() => {
      setVisible(false);
    }, minDurationMs);

    return () => {
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
        hideTimerRef.current = null;
      }
    };
  }, [pathname, minDurationMs]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-9999 grid place-items-center bg-[#0f1f42]">
      <div
        className="h-14 w-14 animate-spin rounded-full border-4 border-white/25 border-t-white"
        aria-label="Loading"
        role="status"
      />
    </div>
  );
}
