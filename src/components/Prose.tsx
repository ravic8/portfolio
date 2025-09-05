// src/components/Prose.tsx
import React from "react";
import type { BlogBlock } from "../config/siteConfig";

export default function Prose({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="prose max-w-none">
      {blocks.map((b, i) => {
        if (b.type === "h2") return <h2 key={i} className="mt-8 text-2xl font-bold text-neutral-900">{b.text}</h2>;
        if (b.type === "p")  return <p key={i} className="mt-4 text-neutral-800">{b.text}</p>;
        if (b.type === "ul") return (
          <ul key={i} className="mt-4 list-disc pl-6 text-neutral-800 space-y-1">
            {b.items.map((li, j) => <li key={j}>{li}</li>)}
          </ul>
        );
        if (b.type === "code") return (
          <pre key={i} className="mt-4 rounded-xl bg-neutral-900 text-neutral-100 p-4 overflow-x-auto">
            <code>{b.text}</code>
          </pre>
        );
        return null;
      })}
    </div>
  );
}
