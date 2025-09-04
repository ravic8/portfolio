import portrait from "../assets/portrait.jpg"; // or "/portrait.jpg" if using public/
import { siteConfig } from "../config/siteConfig";

function SocialIcons() {
  const items = [
    {
      label: "GitHub",
      href: siteConfig.links.github,
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
          <path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73c.5.09.68-.22.68-.49c0-.24-.01-.87-.01-1.7c-2.78.62-3.37-1.2-3.37-1.2c-.46-1.19-1.12-1.51-1.12-1.51c-.92-.64.07-.63.07-.63c1.01.07 1.54 1.06 1.54 1.06c.9 1.57 2.36 1.12 2.93.86c.09-.67.35-1.12.63-1.38c-2.22-.26-4.56-1.14-4.56-5.06c0-1.12.39-2.04 1.03-2.76c-.1-.26-.45-1.31.1-2.73c0 0 .84-.27 2.75 1.05c.8-.22 1.65-.34 2.5-.34s1.7.12 2.5.34c1.9-1.32 2.75-1.05 2.75-1.05c.55 1.42.2 2.47.1 2.73c.64.72 1.02 1.64 1.02 2.76c0 3.92-2.34 4.79-4.56 5.05c.36.32.67.94.67 1.9c0 1.37-.01 2.48-.01 2.82c0 .27.18.58.69.48A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/>
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: siteConfig.links.linkedin,
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
          <path fill="currentColor" d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.82-1.95 3.74-1.95C20.2 8.75 21 11 21 14.3V21h-4v-5.7c0-1.36-.02-3.12-1.9-3.12c-1.9 0-2.2 1.48-2.2 3v5.8H9z"/>
        </svg>
      ),
    },
    {
      label: "Email",
      href: siteConfig.links.email,
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
          <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 2v.01L12 13L4 6.01V6zM4 18V8l8 7l8-7v10"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="flex items-center gap-4">
      {items.map((it) => (
        <a
          key={it.label}
          href={it.href}
          aria-label={it.label}
          target="_blank"
          rel="noreferrer"
          className="text-slate-700 hover:text-slate-900"
        >
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm hover:shadow transition">
            {it.svg}
          </span>
        </a>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="container-max pt-6 md:pt-10 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left column */}
          <div>
            <p className="uppercase tracking-[0.15em] text-neutral-500 text-xs md:text-sm">
              Hello, my name is
            </p>
            <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-neutral-900">
              {siteConfig.name}
            </h1>
            <p className="mt-3 text-xl text-neutral-700">{siteConfig.tagline}</p>

            <p className="mt-4 text-neutral-700 leading-relaxed">
              {siteConfig.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-primary">My Work</a>
              <a href="#about" className="btn btn-outline">About Me</a>
              <a href="/resume.pdf" className="btn btn-outline" target="_blank" rel="noreferrer">Resume</a>
            </div>

            <div className="mt-6">
              <SocialIcons />
            </div>
          </div>

          {/* Right column: image flush with container's right edge */}
          <div className="order-first md:order-none flex justify-end">
            <img
              src={portrait}
              alt={`${siteConfig.name} portrait`}
              className="w-full max-w-md md:max-w-none md:w-[460px] rounded-2xl shadow-soft object-cover"
            />
          </div>
        </div>

        {/* Cards */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card">
            <div className="text-2xl">⚡</div>
            <h3 className="mt-2 text-lg font-semibold text-neutral-900">What I do</h3>
            <p className="mt-2 text-neutral-700 text-sm">
              {siteConfig.tagline}
            </p>
          </div>

          <div className="card">
            <div className="text-2xl">🏆</div>
            <h3 className="mt-2 text-lg font-semibold text-neutral-900">Recent wins</h3>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-neutral-700 text-sm">
              {siteConfig.wins.map((w) => <li key={w}>{w}</li>)}
            </ul>
          </div>

          <div className="card">
            <div className="text-2xl">✍️</div>
            <h3 className="mt-2 text-lg font-semibold text-neutral-900">Currently</h3>
            <p className="mt-2 text-neutral-700 text-sm">{siteConfig.current}</p>
          </div>
        </div>
      </section>
    </>
  );
}
