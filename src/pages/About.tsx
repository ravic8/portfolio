import React from "react";
import { siteConfig } from "../config/siteConfig";
import Reveal from "../components/Reveal";

export default function About() {
  const { name, about } = siteConfig;
  const exps = about.experience; // newest → oldest in config

  // Build a compact snapshot from experience (newest → oldest)
  const snapshot = exps.map((e) => ({
    period: e.period,
    label: `${e.role} @ ${e.company}`,
    clients: (e as any).clients as string[] | undefined, // optional
  }));

  return (
    <>
      <title>About — {name}</title>
      <meta
        name="description"
        content={`${name} — background, experience, skills, and education.`}
      />

      <section className="container-max py-10 md:py-14 space-y-10">
        {/* Intro */}
        <Reveal>
          <header className="max-w-3xl">
            <h1 className="text-2xl md:text-3xl font-bold text-neutral-900">About</h1>
            <div className="mt-3 space-y-3 text-neutral-700 leading-relaxed">
              {about.summary.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </header>
        </Reveal>

        {/* Career snapshot (compact, shows clients when present) */}
        <Reveal>
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 md:p-5">
            <h2 className="text-base font-semibold text-neutral-900">Career snapshot</h2>
            <div className="mt-3 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {snapshot.map((s, i) => (
                <div key={i} className="rounded-xl border border-neutral-200 bg-neutral-50 p-3">
                  <div className="text-xs text-neutral-500">{s.period}</div>
                  <div className="text-sm font-medium text-neutral-900 mt-0.5">{s.label}</div>
                  {s.clients?.length ? (
                    <div className="text-xs text-neutral-600 mt-0.5">
                      Clients: {s.clients.join(", ")}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Experience (single source of truth) */}
        <Reveal>
          <section>
            <h2 className="text-lg font-semibold text-neutral-900">Experience</h2>
            <div className="mt-4 grid gap-5">
              {exps.map((exp: any, idx: number) => (
                <article
                  key={`${exp.company}-${idx}`}
                  className="rounded-2xl border border-neutral-200 bg-white p-5"
                >
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="text-base font-semibold text-neutral-900">{exp.role}</h3>
                    <div className="text-neutral-600">· {exp.company}</div>
                    <div className="ml-auto text-sm text-neutral-500">{exp.period}</div>
                  </div>

                  {exp.domain && (
                    <div className="mt-1 text-sm text-neutral-600">{exp.domain}</div>
                  )}

                  {exp.clients?.length ? (
                    <div className="mt-1 text-sm text-neutral-600">
                      Clients: {exp.clients.join(", ")}
                    </div>
                  ) : null}

                  <ul className="mt-3 list-disc pl-5 space-y-1 text-neutral-700">
                    {exp.bullets.map((b: string, j: number) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Skills */}
        <Reveal>
          <section>
            <h2 className="text-lg font-semibold text-neutral-900">Skills</h2>
            <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {about.skills.map((group: any, i: number) => (
                <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-4">
                  <div className="text-sm font-medium text-neutral-900">{group.title}</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {group.items.map((s: string) => (
                      <span
                        key={s}
                        className="text-xs rounded-full bg-neutral-100 px-2 py-1 text-neutral-700 border border-neutral-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Education & Certifications */}
        <Reveal>
          <section className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
              <h2 className="text-lg font-semibold text-neutral-900">Education</h2>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-neutral-700">
                {about.education.map((e: string) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
              <h2 className="text-lg font-semibold text-neutral-900">Certifications</h2>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-neutral-700">
                {about.certifications.map((c: string) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          
          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
              <h2 className="text-lg font-semibold text-neutral-900">Achievements</h2>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-neutral-700">
                {about.achievements.map((c: string) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </section>
        </Reveal>
      </section>
    </>
  );
}
