// src/components/PageTransition.tsx
import React from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  // Intentionally no animation — we now prefer subtle in-view reveals per section.
  return <>{children}</>;
}
