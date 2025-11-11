// src/components/Lightbox.tsx
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  open: boolean;
  onClose: () => void;
  images: string[];
  index: number; // current index
  onIndexChange: (next: number) => void;
  title?: string;
  captions?: string[]; // optional: same length as images
};

export default function Lightbox({
  open,
  onClose,
  images,
  index,
  onIndexChange,
  title,
  captions,
}: Props) {
  const idx = Math.max(0, Math.min(index, images.length - 1));
  const img = images[idx];
  const caption = captions?.[idx];

  // Keyboard handlers
  React.useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndexChange((idx + 1) % images.length);
      if (e.key === "ArrowLeft")
        onIndexChange((idx - 1 + images.length) % images.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, idx, images.length, onClose, onIndexChange]);

  if (!open || images.length === 0) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="absolute inset-0 p-4 md:p-8 flex items-center justify-center"
            // prevent closing when clicking the image/card
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              className="relative w-full max-w-5xl"
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
            >
              {/* Header */}
              {(title || images.length > 1) && (
                <div className="mb-3 flex items-center justify-between text-neutral-200 text-sm">
                  <div className="font-medium truncate pr-4">
                    {title ?? "Preview"}
                  </div>
                  {images.length > 1 && (
                    <div className="opacity-80">
                      {idx + 1} / {images.length}
                    </div>
                  )}
                </div>
              )}

              {/* Image */}
              <img
                src={img}
                alt={`${title ?? "Screenshot"} ${idx + 1}/${images.length}`}
                className="w-full h-auto rounded-2xl shadow-soft object-contain bg-black/10"
              />

              {/* Caption (optional) */}
              {caption && (
                <div className="mt-2 text-center text-neutral-200 text-sm">
                  {caption}
                </div>
              )}

              {/* Controls */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      onIndexChange((idx - 1 + images.length) % images.length)
                    }
                    className="absolute top-1/2 -translate-y-1/2 left-2 rounded-full bg-white p-2 shadow-soft"
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                  <button
                    onClick={() =>
                      onIndexChange((idx + 1) % images.length)
                    }
                    className="absolute top-1/2 -translate-y-1/2 right-2 rounded-full bg-white p-2 shadow-soft"
                    aria-label="Next image"
                  >
                    ›
                  </button>
                </>
              )}

              {/* Close */}
              <button
                onClick={onClose}
                className="absolute -top-3 -right-3 md:-top-4 md:-right-4 rounded-full bg-white p-2 shadow-soft"
                aria-label="Close"
              >
                ✕
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
