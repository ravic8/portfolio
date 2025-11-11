// src/pages/Blog.tsx
import React from "react";
import { siteConfig, type Blog as BlogPost } from "../config/siteConfig";
import BlogCard from "../components/BlogCard";
import Reveal from "../components/Reveal";

export default function Blog() {
  const posts: BlogPost[] = siteConfig.blogs.slice().sort(
    (a, b) => +new Date(b.date) - +new Date(a.date)
  );

  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort();
  const [query, setQuery] = React.useState("");
  const [tag, setTag] = React.useState<string | null>(null);

  const filtered = posts.filter((p) => {
    const q = query.trim().toLowerCase();
    const hit =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q));
    const tagHit = !tag || p.tags.includes(tag);
    return hit && tagHit;
  });

  return (
    <>
      <title>Blog — {siteConfig.name}</title>
      <meta name="description" content={`Notes and write-ups by ${siteConfig.name}`} />
      <section className="container-max py-10 md:py-14">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-neutral-900">Blog</h1>
          <div className="flex gap-3">
            <input
              className="border rounded-xl px-3 py-2 text-sm"
              placeholder="Search posts…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <select
              className="border rounded-xl px-3 py-2 text-sm"
              value={tag ?? ""}
              onChange={(e) => setTag(e.target.value || null)}
            >
              <option value="">All tags</option>
              {allTags.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-6">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
          {!filtered.length && <div className="text-neutral-500">No posts yet.</div>}
        </div>
      </section>
    </>
  );
}
