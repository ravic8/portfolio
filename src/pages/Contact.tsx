import React from "react";
import { siteConfig } from "../config/siteConfig";
import CopyField from "../components/CopyField";
import Reveal from "../components/Reveal";

export default function Contact() {
  const phoneDisplay = "+91 99405 99597";
  const phoneRaw = siteConfig.links.phone || "+919940599597";

  const [name, setName] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  const mailTo = React.useMemo(() => {
    const params = new URLSearchParams({
      subject: subject || "Hello from your website",
      body:
        (name ? `From: ${name}\n\n` : "") +
        (message || "Hi Raviteja, I'd love to connect about a project."),
    });
    return `${siteConfig.links.email}?${params.toString()}`;
  }, [name, subject, message]);

  return (
    <section className="container-max py-10 md:py-14">
      {/* Hero */}
      <Reveal as="header" className="max-w-3xl">
        <p className="uppercase tracking-[0.15em] text-neutral-500 text-xs md:text-sm">
          Contact
        </p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-neutral-900">
          Let’s build something reliable
        </h1>
        <p className="mt-3 text-neutral-700">
          I design data platforms, streaming systems, and ML pipelines. The fastest way
          to reach me is email; I also respond on LinkedIn.
        </p>
      </Reveal>

      {/* Primary cards */}
      <Reveal className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Direct */}
        <div className="card">
          <h2 className="text-lg font-semibold text-neutral-900">Direct</h2>
          <div className="mt-3 grid gap-3 text-neutral-700">
            <CopyField label="Email" value="ravitejanb@gmail.com" />
            <CopyField label="Phone" value={phoneRaw} />
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={siteConfig.links.email} className="btn btn-primary">Open email</a>
            <a href={`tel:${phoneRaw}`} className="btn btn-outline">Call</a>
            <a
              href={`https://wa.me/${phoneRaw.replace(/\D/g, "")}`}
              className="btn btn-outline"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Socials */}
        <div className="card">
          <h2 className="text-lg font-semibold text-neutral-900">Profiles</h2>
          <div className="mt-3 grid gap-2 text-neutral-700">
            <LinkRow label="LinkedIn" href={siteConfig.links.linkedin} />
            <LinkRow label="GitHub" href={siteConfig.links.github} />
            <LinkRow label="Code360" href={siteConfig.links.code360!} />
            <LinkRow label="LeetCode" href={siteConfig.links.leetcode!} />
          </div>
        </div>
      </Reveal>

      {/* Quick message (mailto) */}
      <Reveal className="mt-8 card">
        <h2 className="text-lg font-semibold text-neutral-900">Send a quick message</h2>
        <p className="mt-1 text-neutral-700 text-sm">
          This uses your email client (no data stored). For longer notes, include a link or document.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = mailTo;
          }}
          className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="grid gap-2">
            <label className="text-sm text-neutral-600">Your name</label>
            <input
              className="rounded-xl border border-neutral-200 bg-white px-3 py-2 outline-none focus:ring focus:ring-neutral-200"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Doe"
            />
          </div>

          <div className="grid gap-2 md:col-span-1">
            <label className="text-sm text-neutral-600">Subject</label>
            <input
              className="rounded-xl border border-neutral-200 bg-white px-3 py-2 outline-none focus:ring focus:ring-neutral-200"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Consulting / Opportunity / Collaboration"
            />
          </div>

          <div className="grid gap-2 md:col-span-2">
            <label className="text-sm text-neutral-600">Message</label>
            <textarea
              className="min-h-[140px] rounded-2xl border border-neutral-200 bg-white px-3 py-2 outline-none focus:ring focus:ring-neutral-200"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={`Hi Raviteja,\n\nI'd like your help with ...`}
            />
          </div>

          <div className="md:col-span-2">
            <button type="submit" className="btn btn-primary">Open in email</button>
          </div>
        </form>
      </Reveal>

      {/* FYI / availability */}
      <Reveal className="mt-8 card">
        <h2 className="text-lg font-semibold text-neutral-900">Availability</h2>
        <p className="mt-2 text-neutral-700">
          Open to data engineering consulting (pipelines, streaming, ClickHouse, forecasting) and full-time roles aligned with
          platform reliability and ML operations.
        </p>
      </Reveal>

      {/* Micro-footer */}
      <Reveal className="mt-10 text-center text-sm text-neutral-500">
        Prefer email? <a href={siteConfig.links.email} className="underline">ravitejanb@gmail.com</a> • {phoneDisplay}
      </Reveal>
    </section>
  );
}

function LinkRow({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-between rounded-xl border border-neutral-200 bg-white px-3 py-2 hover:bg-neutral-50"
    >
      <span>{label}</span>
      <span className="text-neutral-500 text-sm">{href.replace(/^https?:\/\//, "")}</span>
    </a>
  );
}
