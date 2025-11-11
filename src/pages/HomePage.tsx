import React from "react";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { siteConfig } from "../config/siteConfig";

export default function HomePage() {
  // removed `home` from destructuring to satisfy eslint
  const { name, tagline, description, links } = siteConfig;

  React.useEffect(() => {
    document.title = `${name} — ${tagline}`;
  }, [name, tagline]);

  return (
    <>
      {/* HERO */}
      <section className="container-max py-10 md:py-14">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="order-2 md:order-1 self-start">
            <div className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-neutral-600 font-semibold">
              {tagline}
            </div>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-neutral-900">{name}</h1>
            <p className="mt-3 text-neutral-700 max-w-xl">{description}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="/projects" className="btn btn-primary">My Work</a>
              <a href="/about" className="btn">About Me</a>
              <a href="/contact" className="btn">Contact</a>
            </div>
            <div className="mt-5 flex items-center gap-3 text-sm">
              <a className="btn btn-chip" href={links.github} aria-label="GitHub">GH</a>
              <a className="btn btn-chip" href={links.linkedin} aria-label="LinkedIn">in</a>
              <a className="btn btn-chip" href={links.email} aria-label="Email">@</a>
            </div>
          </div>

          <div className="order-1 md:order-2 self-start">
            <img
              src="/portrait.jpg"
              alt={name}
              className="w-full rounded-3xl shadow-soft object-cover aspect-[4/5] md:aspect-[3/4]"
            />
          </div>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="container-max pb-12">
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          <Reveal className="h-full">
            <motion.div className="card h-full flex flex-col">
              <div className="text-2xl">⚡</div>
              <h2 className="mt-2 text-lg font-semibold text-neutral-900">What I deliver</h2>
              <p className="mt-2 text-neutral-700">
                I design production-grade forecasting & anomaly systems, ship agentic pipelines for data quality and reporting, and optimize warehouses for low-latency analytics.
              </p>
            </motion.div>
          </Reveal>

          <Reveal className="h-full">
            <motion.div className="card h-full flex flex-col">
              <div className="text-2xl">🏆</div>
              <h2 className="mt-2 text-lg font-semibold text-neutral-900">Recent wins</h2>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-neutral-700">
                <li>Predictive maintenance alerts across 10k+ retail sites.</li>
                <li>Agentic research stack that automates EOD market analysis & reporting.</li>
                <li>Inventory-intelligence workflows improving planning effectiveness.</li>
              </ul>
            </motion.div>
          </Reveal>

          <Reveal className="h-full">
            <motion.div className="card h-full flex flex-col">
              <div className="text-2xl">✍️</div>
              <h2 className="mt-2 text-lg font-semibold text-neutral-900">Now</h2>
              <ul className="mt-2 text-neutral-700 list-disc pl-5 space-y-1">
                <li>Operational analytics & predictive maintenance (SiteIQ).</li>
                <li>Agentic research stack for market intelligence (Atlas/Lens).</li>
              </ul>
            </motion.div>
          </Reveal>
        </div>

        <div className="mt-8 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} {name}
        </div>
      </section>
    </>
  );
}
