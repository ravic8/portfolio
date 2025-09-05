import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { siteConfig, type Project } from "../config/siteConfig";
import Lightbox from "../components/Lightbox";

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // ✅ Hooks must be called unconditionally (top of component)
  const [open, setOpen] = React.useState(false);
  const [images, setImages] = React.useState<string[]>([]);
  const [index, setIndex] = React.useState(0);

  const projects: Project[] = siteConfig.projects;
  const idx = projects.findIndex((p) => p.slug === slug);
  const project = projects[idx];

  React.useEffect(() => {
    if (!project) navigate("/projects", { replace: true });
  }, [project, navigate]);

  // If slug not found, bail out (hooks were already called above, so it's OK)
  if (!project) return null;

  const prev = projects[idx - 1];
  const next = projects[idx + 1];

  function openGallery(start = 0) {
    setImages(project.images ?? []);
    setIndex(start);
    setOpen(true);
  }

  return (
    <article className="container-max py-10 md:py-14">
      {/* Header / breadcrumb */}
      <div className="text-xs text-neutral-500">
        <Link to="/projects" className="hover:underline">
          Projects
        </Link>
        <span className="mx-2">/</span>
        <span>{project.title}</span>
      </div>

      <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-neutral-900">
        {project.title}
      </h1>

      {/* Tech chips */}
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs rounded-full bg-neutral-100 px-2 py-1 text-neutral-700 border border-neutral-200"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Hero image */}
      {project.images?.[0] && (
        <button
          onClick={() => openGallery(0)}
          className="mt-6 w-full rounded-2xl overflow-hidden bg-neutral-100"
          aria-label="Open gallery"
        >
          <img
            src={project.images[0]}
            alt={`${project.title} screenshot`}
            className="w-full h-auto object-cover"
          />
        </button>
      )}

      {/* Summary */}
      {project.summary && (
        <p className="mt-6 text-neutral-800 text-lg">{project.summary}</p>
      )}

      {/* Case study sections */}
      <div className="mt-8 grid gap-6">
        <Section title="Problem">{project.problem}</Section>

        {!!project.approach?.length && (
          <Section title="Approach">
            <List items={project.approach} />
          </Section>
        )}

        {!!project.challenges?.length && (
          <Section title="Challenges">
            <List items={project.challenges!} />
          </Section>
        )}

        {!!project.optimizations?.length && (
          <Section title="Optimizations">
            <List items={project.optimizations!} />
          </Section>
        )}

        {project.impact && <Section title="Impact">{project.impact}</Section>}

        {/* Screenshots gallery */}
        {!!project.images?.length && (
          <div className="card">
            <h2 className="text-lg font-semibold text-neutral-900">
              Screenshots
            </h2>
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {project.images.map((src, i) => (
                <button
                  key={src}
                  onClick={() => openGallery(i)}
                  className="overflow-hidden rounded-xl bg-neutral-100 hover:opacity-90"
                >
                  <img
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="h-32 w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Placeholder for future deep-dive */}
        <div className="card">
          <h2 className="text-lg font-semibold text-neutral-900">
            Deep-dive (coming soon)
          </h2>
          <p className="mt-2 text-neutral-700">
            I’ll add architectural diagrams, key SQL/model snippets, runbooks,
            and benchmark notes here. The layout is ready—just drop longer
            write-ups into the config when you’re ready.
          </p>
        </div>
      </div>

      {/* Prev / Next */}
      <nav className="mt-10 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <div>
          {prev && (
            <Link to={`/projects/${prev.slug}`} className="btn btn-outline">
              ← {prev.title}
            </Link>
          )}
        </div>
        <div className="md:ml-auto">
          {next && (
            <Link to={`/projects/${next.slug}`} className="btn btn-outline">
              {next.title} →
            </Link>
          )}
        </div>
      </nav>

      {/* Lightbox */}
      {open && images.length > 0 && (
        <Lightbox
          images={images}
          openIndex={index}
          onIndex={setIndex}
          onClose={() => setOpen(false)}
          caption={project.title}
        />
      )}
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card">
      <div className="text-[13px] font-semibold uppercase tracking-wide text-neutral-500">
        {title}
      </div>
      <div className="mt-1 text-neutral-700">{children}</div>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-1">
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ul>
  );
}
