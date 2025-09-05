// src/pages/About.tsx
import React from "react";
import { siteConfig } from "../config/siteConfig";
import Reveal from "../components/Reveal";

export default function About() {
  const { about } = siteConfig;

  return (
    <section className="container-max py-10 md:py-14">
      <Reveal as="header" className="max-w-3xl">
        <p className="uppercase tracking-[0.15em] text-neutral-500 text-xs md:text-sm">
          About
        </p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-neutral-900">
          Who I am
        </h1>
        {about.summary.map((s, i) => (
          <p key={i} className="mt-3 text-neutral-700">
            {s}
          </p>
        ))}
      </Reveal>

      {/* Skills */}
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {about.skills.map((bucket, i) => (
          <Reveal key={bucket.title} delay={i * 0.05} className="card">
            <h2 className="text-lg font-semibold text-neutral-900">{bucket.title}</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {bucket.items.map((it) => (
                <span
                  key={it}
                  className="text-xs rounded-full bg-neutral-100 px-2 py-1 text-neutral-700 border border-neutral-200"
                >
                  {it}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      {/* Timeline */}
      <Reveal className="mt-8 card">
        <h2 className="text-lg font-semibold text-neutral-900">Timeline</h2>
        <div className="mt-3 grid gap-4">
          {about.timeline.map((t) => (
            <div
              key={t.title + t.date}
              className="rounded-xl border border-neutral-200 p-4 bg-white"
            >
              <div className="text-xs text-neutral-500">{t.date}</div>
              <div className="font-medium text-neutral-900">{t.title}</div>
              <p className="mt-1 text-neutral-700">{t.description}</p>
              {t.tags?.length ? (
                <div className="mt-2 flex flex-wrap gap-2">
                  {t.tags.map((tg) => (
                    <span
                      key={tg}
                      className="text-xs rounded-full bg-neutral-100 px-2 py-1 text-neutral-700 border border-neutral-200"
                    >
                      {tg}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </Reveal>

      {/* Experience */}
      <div className="mt-8 grid gap-4">
        {about.experience.map((exp, i) => (
          <Reveal key={exp.company + exp.period} delay={i * 0.06} className="card">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
              <h3 className="text-lg font-semibold text-neutral-900">
                {exp.role} · {exp.company}
              </h3>
              <div className="text-sm text-neutral-500">{exp.period}</div>
            </div>
            {exp.domain && (
              <div className="text-sm text-neutral-600 mt-1">{exp.domain}</div>
            )}
            <ul className="mt-3 list-disc pl-5 space-y-1 text-neutral-700">
              {exp.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      {/* Education / Certifications */}
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Reveal className="card">
          <h2 className="text-lg font-semibold text-neutral-900">Education</h2>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-neutral-700">
            {about.education.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="card">
          <h2 className="text-lg font-semibold text-neutral-900">Certifications</h2>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-neutral-700">
            {about.certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
