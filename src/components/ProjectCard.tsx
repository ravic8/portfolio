import React from "react";
import { Link } from "react-router-dom";
import type { Project } from "../config/siteConfig";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { microHover } from "../lib/motion";

export default function ProjectCard({ p, onOpen }: { p: Project; onOpen: (p: Project, start?: number) => void; }) {
  return (
    <Reveal>
      <motion.article className="card overflow-hidden" variants={microHover} initial="rest" whileHover="hover">
        <div className="flex flex-col md:flex-row gap-6">
          {p.images?.[0] && (
            <button onClick={() => onOpen(p, 0)} className="group relative w-full md:w-64 overflow-hidden rounded-xl bg-neutral-100" aria-label={`Open screenshots for ${p.title}`}>
              <img src={p.images[0]} alt={`${p.title} screenshot`} className="h-44 w-full md:w-64 object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
              <div className="absolute inset-0 hidden place-items-center bg-black/35 text-white group-hover:grid">
                <span className="text-sm">View screenshots</span>
              </div>
            </button>
          )}

          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold text-neutral-900">{p.title}</h3>
            <p className="mt-1 text-neutral-700">{p.summary}</p>

            <div className="mt-4 grid gap-3 text-sm">
              <Section title="Problem">{p.problem}</Section>
              {p.approach?.length > 0 && <Section title="Approach"><List items={p.approach} /></Section>}
              {p.challenges?.length ? <Section title="Challenges"><List items={p.challenges!} /></Section> : null}
              {p.optimizations?.length ? <Section title="Optimizations"><List items={p.optimizations!} /></Section> : null}
              {p.impact && <Section title="Impact">{p.impact}</Section>}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              {p.tech.map((t) => (
                <span key={t} className="text-xs rounded-full bg-neutral-100 px-2 py-1 text-neutral-700 border border-neutral-200">{t}</span>
              ))}
              <div className="ml-auto flex gap-2">
                {p.images?.length ? <button onClick={() => onOpen(p, 0)} className="btn btn-outline">Open Gallery</button> : null}
                <Link to={`/projects/${p.slug}`} className="btn btn-primary">Read more</Link>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-[13px] font-semibold uppercase tracking-wide text-neutral-500">{title}</div>
      <div className="mt-1 text-neutral-700">{children}</div>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return <ul className="list-disc pl-5 space-y-1">{items.map((it, i) => <li key={i}>{it}</li>)}</ul>;
}
