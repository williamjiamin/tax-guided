"use client";

import { useEffect } from "react";

/**
 * Reveals `.scroll-reveal` elements when they scroll into the viewport.
 * Uses a scroll listener + getBoundingClientRect for maximum reliability
 * (no IntersectionObserver timing issues with React Strict Mode).
 */
export function useScrollRevealAll() {
  useEffect(() => {
    function revealVisible() {
      const elements = document.querySelectorAll(".scroll-reveal:not(.scroll-revealed)");
      for (const el of elements) {
        const rect = el.getBoundingClientRect();
        // Reveal when the top of the element is within 90% of the viewport height
        if (rect.top < window.innerHeight * 0.92) {
          el.classList.add("scroll-revealed");
        }
      }
    }

    // Check on mount (for elements already in view)
    revealVisible();

    // Check on scroll
    window.addEventListener("scroll", revealVisible, { passive: true });

    return () => window.removeEventListener("scroll", revealVisible);
  }, []);
}
