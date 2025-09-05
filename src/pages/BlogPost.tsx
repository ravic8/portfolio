import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { siteConfig, type Blog } from "../config/siteConfig";
import Prose from "../components/Prose";
import PageTransition from "../components/PageTransition";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const posts: Blog[] = siteConfig.blogs
    .slice()
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

  const idx = posts.findIndex((p) => p.slug === slug);
  const post = posts[idx];

  React.useEffect(() => {
    if (!post) navigate("/blog", { replace: true });
  }, [post, navigate]);

  if (!post) return null;

  const prev = posts[idx - 1];
  const next = posts[idx + 1];

  return (
    <PageTransition>
      <article className="container-max py-10 md:py-14">
        {/* Meta */}
        <div className="text-xs text-neutral-500">
          <Link to="/blog" className="hover:underline">Blog</Link>
          <span className="mx-2">/</span>
          <span>{new Date(post.date).toLocaleDateString()} • {post.readingTimeMins} min read</span>
        </div>

        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-neutral-900">
          {post.title}
        </h1>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span key={t} className="text-xs rounded-full bg-neutral-100 px-2 py-1 text-neutral-700 border border-neutral-200">
              {t}
            </span>
          ))}
        </div>

        {/* Hero */}
        {post.hero && (
          <img
            src={post.hero}
            alt={post.title}
            className="mt-6 w-full rounded-2xl shadow-soft object-cover"
          />
        )}

        {/* Content */}
        <div className="mt-8">
          <Prose blocks={post.content} />
        </div>

        {/* Prev / Next */}
        <nav className="mt-10 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div>
            {prev && (
              <Link to={`/blog/${prev.slug}`} className="btn btn-outline">← {prev.title}</Link>
            )}
          </div>
          <div className="md:ml-auto">
            {next && (
              <Link to={`/blog/${next.slug}`} className="btn btn-outline">{next.title} →</Link>
            )}
          </div>
        </nav>
      </article>
    </PageTransition>
  );
}
