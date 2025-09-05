// src/components/Lightbox.tsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { lightboxBackdrop, lightboxImage } from "../lib/motion";

type Props = {
  images: string[];
  openIndex: number;
  onClose: () => void;
  onIndex: (i: number) => void;
  caption?: string;
};

export default function Lightbox({ images, openIndex, onClose, onIndex, caption }: Props) {
  const idx = openIndex;
  const img = images[idx];

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndex((idx + 1) % images.length);
      if (e.key === "ArrowLeft") onIndex((idx - 1 + images.length) % images.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx, images.length, onClose, onIndex]);

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 z-[100] grid place-items-center bg-black/70 p-4"
        onClick={onClose}
        variants={lightboxBackdrop}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div
          className="relative max-w-5xl w-full"
          onClick={(e) => e.stopPropagation()}
          variants={lightboxImage}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <img src={img} alt={caption || "Screenshot"} className="w-full h-auto rounded-2xl shadow-soft object-contain" />
          {caption && <div className="mt-2 text-center text-neutral-200 text-sm">{caption}</div>}

          {/* Controls */}
          <button
            onClick={onClose}
            className="absolute -top-3 -right-3 rounded-full bg-white p-2 shadow-soft"
            aria-label="Close"
          >
            ✕
          </button>
          {images.length > 1 && (
            <>
              <button
                onClick={() => onIndex((idx - 1 + images.length) % images.length)}
                className="absolute top-1/2 -translate-y-1/2 left-2 rounded-full bg-white p-2 shadow-soft"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                onClick={() => onIndex((idx + 1) % images.length)}
                className="absolute top-1/2 -translate-y-1/2 right-2 rounded-full bg-white p-2 shadow-soft"
                aria-label="Next image"
              >
                ›
              </button>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
