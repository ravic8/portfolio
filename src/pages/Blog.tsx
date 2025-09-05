import React from "react";
import { siteConfig, type Blog as BlogPost } from "../config/siteConfig";
import BlogCard from "../components/BlogCard";
import Reveal from "../components/Reveal";

export default function BlogIndex() {
  const posts: BlogPost[] = siteConfig.blogs
    .slice()
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort();
  const [query, setQuery] = React.useState("");
  const [activeTag, setActiveTag] = React.useState<string | null>(null);

  const filtered = posts.filter((p) => {
    const q = query.trim().toLowerCase();
    const matchQ =
      !q || [p.title, p.excerpt, ...p.tags].join(" ").toLowerCase().includes(q);
    const matchT = !activeTag || p.tags.includes(activeTag);
    return matchQ && matchT;
  });

  return (
    <section className="container-max py-10 md:py-14">
      {/* Hero */}
      <Reveal as="header" className="max-w-3xl">
        <p className="uppercase tracking-[0.15em] text-neutral-500 text-xs md:text-sm">
          Blog
        </p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-neutral-900">
          Notes from the data trenches
        </h1>
        <p className="mt-3 text-neutral-700">
          Practical lessons from building pipelines, streaming systems, analytics
          lakes, and ML ops.
        </p>
      </Reveal>

      {/* Controls */}
      <Reveal className="mt-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search posts…"
          className="w-full md:w-80 rounded-xl border border-neutral-200 bg-white px-4 py-2 outline-none focus:ring focus:ring-neutral-200"
        />
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTag(null)}
            className={`text-xs rounded-full px-3 py-1 border ${
              activeTag === null
                ? "bg-neutral-900 text-white border-neutral-900"
                : "bg-white text-neutral-700 border-neutral-200"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag === activeTag ? null : tag)}
              className={`text-xs rounded-full px-3 py-1 border ${
                activeTag === tag
                  ? "bg-neutral-900 text-white border-neutral-900"
                  : "bg-white text-neutral-700 border-neutral-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </Reveal>

      {/* Grid (each card animates itself) */}
      <div className="mt-8 grid grid-cols-1 gap-6">
        {filtered.map((p) => (
          <BlogCard key={p.slug} post={p} />
        ))}
        {filtered.length === 0 && (
          <div className="card">
            <p>No posts match your search.</p>
          </div>
        )}
      </div>
    </section>
  );
}
