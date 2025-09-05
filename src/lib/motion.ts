// src/lib/motion.ts
import type { Variants, Transition } from "framer-motion";

/** Global easing used across the site (subtle, premium feel) */
export const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1] as const;

/** Subtle reveal on scroll (Apple-like) */
export const reveal: Variants = {
  initial: { opacity: 0, y: 16, filter: "blur(2px)" },
  enter:   { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: easeOut } },
};

/** Faster reveal for small UI (search bars, chips) */
export const revealFast: Variants = {
  initial: { opacity: 0, y: 10 },
  enter:   { opacity: 1, y: 0, transition: { duration: 0.35, ease: easeOut } },
};

/** Micro hover: 2px lift + soft shadow */
export const microHover: Variants = {
  rest:  { y: 0, scale: 1, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" },
  hover: { y: -2, scale: 1.005, boxShadow: "0 6px 24px rgba(0,0,0,0.08)" },
};

/* ------------------------------------------------------------------ */
/* Backward-compatible exports (used by Lightbox / older pages)       */
/* ------------------------------------------------------------------ */

/** Lightbox backdrop fade */
export const lightboxBackdrop: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.35, ease: easeOut } },
  exit:    { opacity: 0, transition: { duration: 0.25, ease: easeOut } },
};

/** Lightbox image scale-in */
export const lightboxImage: Variants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: easeOut } },
  exit:    { opacity: 0, scale: 0.98, transition: { duration: 0.25, ease: easeOut } },
};

/** Legacy page fade (kept for compatibility; you can ignore) */
export const pageFade: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: easeOut } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.25, ease: easeOut } },
};

/** Simple stagger container (optional) */
export const staggerContainer = (stagger = 0.07, delayChildren = 0.05): Variants => ({
  initial: {},
  animate: { transition: { staggerChildren: stagger, delayChildren } },
});

/** Legacy 'rise' variant kept for compatibility */
export const rise: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
};
