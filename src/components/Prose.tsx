// src/components/Prose.tsx
import React from "react";
import type { BlogBlock } from "../config/siteConfig";

export default function Prose({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="prose prose-neutral max-w-none">
      {blocks.map((b, i) => {
        if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
        if (b.type === "p") return <p key={i}>{b.text}</p>;
        if (b.type === "ul")
          return (
            <ul key={i} className="mt-4 list-disc pl-6 text-neutral-800 space-y-1">
              {b.items.map((li: string, j: number) => (
                <li key={j}>{li}</li>
              ))}
            </ul>
          );
        if (b.type === "code")
          return (
            <pre key={i} className="mt-4 rounded-xl bg-neutral-900 text-neutral-100 p-4 overflow-x-auto">
              <code>{b.code}</code>
            </pre>
          );
        return null;
      })}
    </div>
  );
}
