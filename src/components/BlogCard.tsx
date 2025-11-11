// src/components/BlogCard.tsx
import { Link } from "react-router-dom";
import type { Blog } from "../config/siteConfig";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { microHover } from "../lib/motion";

export default function BlogCard({ post }: { post: Blog }) {
  return (
    <Reveal>
      <motion.article className="card overflow-hidden" variants={microHover} initial="rest" whileHover="hover">
        <div className="flex flex-col md:flex-row gap-6">
          {post.hero && (
            <Link to={`/blog/${post.slug}`} className="block w-full md:w-64">
              <img
                src={post.hero}
                alt={post.title}
                className="h-44 w-full md:w-64 object-cover rounded-xl transition-transform duration-300 hover:scale-[1.02]"
              />
            </Link>
          )}

          <div className="flex-1 min-w-0">
            <Link to={`/blog/${post.slug}`}>
              <h3 className="text-lg font-semibold text-neutral-900">{post.title}</h3>
            </Link>
            <div className="mt-1 text-xs text-neutral-500">{post.date}</div>
            <p className="mt-2 text-neutral-700">{post.excerpt}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {post.tags.map((t: string) => (
                <span
                  key={t}
                  className="text-xs rounded-full bg-neutral-100 px-2 py-1 text-neutral-700 border border-neutral-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}
