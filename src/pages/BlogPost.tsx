// src/pages/BlogPost.tsx
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { siteConfig, type Blog } from "../config/siteConfig";
import Prose from "../components/Prose";
import PageTransition from "../components/PageTransition";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const posts: Blog[] = siteConfig.blogs.slice().sort(
    (a, b) => +new Date(b.date) - +new Date(a.date)
  );

  const idx = posts.findIndex((p) => p.slug === slug);
  const post = posts[idx];

  React.useEffect(() => {
    if (!post) navigate("/blog");
  }, [post, navigate]);

  if (!post) return null;

  const prev = posts[idx - 1];
  const next = posts[idx + 1];

  return (
    <>
      <title>{post.title} — {siteConfig.name}</title>
      <meta name="description" content={post.excerpt} />
      <PageTransition>
        <section className="container-max py-10 md:py-14">
          <Link to="/blog" className="underline text-sm text-neutral-600">← All posts</Link>
          <h1 className="mt-3 text-2xl md:text-3xl font-bold text-neutral-900">{post.title}</h1>
          <div className="mt-1 text-xs text-neutral-500">{post.date}</div>

          {post.hero && (
            <img
              src={post.hero}
              alt={post.title}
              className="mt-6 w-full rounded-2xl shadow-soft object-cover"
            />
          )}

          <div className="mt-6">
            <Prose blocks={post.content} />
          </div>

          <div className="mt-8 flex items-center justify-between text-sm">
            {prev ? <Link className="underline" to={`/blog/${prev.slug}`}>← {prev.title}</Link> : <span />}
            {next ? <Link className="underline" to={`/blog/${next.slug}`}>{next.title} →</Link> : <span />}
          </div>
        </section>
      </PageTransition>
    </>
  );
}
