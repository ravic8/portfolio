import React from "react";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { siteConfig } from "../config/siteConfig";

export default function HomePage() {
  const { name, tagline, description, links } = siteConfig;

  return (
    <>
      <title>{name} — {tagline}</title>
      <meta name="description" content={description} />

      {/* HERO */}
      <section className="container-max py-10 md:py-14">
        {/* Slightly asymmetric layout: 3:2 ratio */}
        <div className="grid md:grid-cols-[1.6fr_1fr] gap-10 md:gap-14 items-start">
          
          {/* Left: Text (wider column) */}
          <div className="order-2 md:order-1 self-start">
            <div className="text-xs md:text-sm uppercase tracking-[0.2em] text-neutral-800 font-bold">
              {tagline}
            </div>

            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-neutral-900">
              {name}
            </h1>

            <p className="mt-4 text-neutral-700 leading-relaxed max-w-2xl">
              {description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/projects" className="btn btn-primary">My Work</a>
              <a href="/about" className="btn">About Me</a>
              <a href="/contact" className="btn">Contact</a>
            </div>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3 text-sm">
              <a className="btn btn-chip" href={links.github} aria-label="GitHub">GH</a>
              <a className="btn btn-chip" href={links.linkedin} aria-label="LinkedIn">in</a>
              <a className="btn btn-chip" href={links.email} aria-label="Email">@</a>
            </div>
          </div>

          {/* Right: Smaller Photo */}
          <div className="order-1 md:order-2 self-start flex justify-center md:justify-end">
            <img
              src="/portrait.jpg"
              alt={name}
              className="w-[70%] md:w-[85%] lg:w-[80%] rounded-3xl shadow-soft object-cover aspect-[4/5]"
            />
          </div>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="container-max pb-12">
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1 */}
          <Reveal className="h-full">
            <motion.div className="card h-full flex flex-col">
              <div className="text-2xl">⚡</div>
              <h2 className="mt-2 text-lg font-semibold text-neutral-900">What I deliver</h2>
              <p className="mt-2 text-neutral-700">
                I design data-intelligent systems that blend real-time analytics,
                forecasting, and agentic AI — from scalable data pipelines to
                fully-automated insight layers.
              </p>
            </motion.div>
          </Reveal>

          {/* Card 2 */}
          <Reveal className="h-full">
            <motion.div className="card h-full flex flex-col">
              <div className="text-2xl">🏆</div>
              <h2 className="mt-2 text-lg font-semibold text-neutral-900">Recent highlights</h2>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-neutral-700">
                <li>Deployed predictive maintenance system for 20K+ IoT retail sites.</li>
                <li>Built agentic research pipeline automating market data ingestion & reports.</li>
                <li>Delivered inventory intelligence for supply-chain optimization.</li>
              </ul>
            </motion.div>
          </Reveal>

          {/* Card 3 */}
          <Reveal className="h-full">
            <motion.div className="card h-full flex flex-col">
              <div className="text-2xl">✍️</div>
              <h2 className="mt-2 text-lg font-semibold text-neutral-900">Currently</h2>
              <p className="mt-2 text-neutral-700">
                Enhancing predictive analytics at <b>SiteIQ</b> and building
                <b> agentic research</b> systems (<b>Atlas</b>, <b>Lens</b>) for autonomous
                decision support in operations and finance.
              </p>
            </motion.div>
          </Reveal>
        </div>

        <div className="mt-10 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} {name}
        </div>
      </section>
    </>
  );
}
