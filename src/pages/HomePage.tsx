import React from "react";
import { siteConfig } from "../config/siteConfig";
import Reveal from "../components/Reveal";
import { motion } from "framer-motion";
import { microHover, revealFast } from "../lib/motion";

export default function HomePage() {
  const { name, tagline, description, wins, links, current } = siteConfig;

  return (
    <section className="container-max py-10 md:py-14">
      {/* Hero row */}
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        {/* Intro */}
        <div>
          <Reveal as="p" className="uppercase tracking-[0.15em] text-neutral-500 text-xs md:text-sm">
            {tagline}
          </Reveal>

          <Reveal as="h1" className="mt-2 text-3xl sm:text-5xl font-extrabold text-neutral-900" delay={0.05}>
            {name}
          </Reveal>

          <Reveal as="p" className="mt-3 max-w-xl text-neutral-700 whitespace-pre-line" delay={0.1}>
            {description}
          </Reveal>

          <Reveal className="mt-5 flex flex-wrap gap-3" delay={0.15}>
            <a className="btn btn-primary" href="/projects">My Work</a>
            <a className="btn btn-outline" href="/about">About Me</a>
            <a className="btn btn-outline" href="/contact">Contact</a>
          </Reveal>

          <Reveal className="mt-5 flex items-center gap-3" delay={0.2} variant={revealFast}>
            <a className="h-9 w-9 grid place-items-center rounded-full border border-neutral-200 bg-white hover:bg-neutral-50" href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><span className="text-sm">GH</span></a>
            <a className="h-9 w-9 grid place-items-center rounded-full border border-neutral-200 bg-white hover:bg-neutral-50" href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><span className="text-sm">in</span></a>
            <a className="h-9 w-9 grid place-items-center rounded-full border border-neutral-200 bg-white hover:bg-neutral-50" href={links.email} aria-label="Email"><span className="text-sm">@</span></a>
          </Reveal>
        </div>

        {/* Portrait */}
        <Reveal delay={0.05}>
          <motion.div
            variants={microHover}
            initial="rest"
            whileHover="hover"
            className="rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200"
          >
            <img src="/portrait.jpg" alt="Raviteja portrait" className="w-full h-auto object-cover" />
          </motion.div>
        </Reveal>
      </div>

      {/* Three cards */}
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <Reveal delay={0.05}>
          <motion.div variants={microHover} initial="rest" whileHover="hover" className="card">
            <div className="text-2xl">⚡</div>
            <h2 className="mt-2 text-lg font-semibold text-neutral-900">What I do</h2>
            <p className="mt-2 text-neutral-700">
              Data platforms, forecasting pipelines, and real-time streams with AWS, Airflow, ClickHouse, and MLflow.
            </p>
          </motion.div>
        </Reveal>

        <Reveal delay={0.1}>
          <motion.div variants={microHover} initial="rest" whileHover="hover" className="card">
            <div className="text-2xl">🏆</div>
            <h2 className="mt-2 text-lg font-semibold text-neutral-900">Recent wins</h2>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-neutral-700">
              {wins.map((w) => (<li key={w}>{w}</li>))}
            </ul>
          </motion.div>
        </Reveal>

        <Reveal delay={0.15}>
          <motion.div variants={microHover} initial="rest" whileHover="hover" className="card">
            <div className="text-2xl">✍️</div>
            <h2 className="mt-2 text-lg font-semibold text-neutral-900">Currently</h2>
            <p className="mt-2 text-neutral-700">{current}</p>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
