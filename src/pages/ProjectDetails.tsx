import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { siteConfig, type Project } from "../config/siteConfig";
import Lightbox from "../components/Lightbox";

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const [images, setImages] = React.useState<string[]>([]);
  const [index, setIndex] = React.useState<number>(0);

  const projects = siteConfig.projects as Project[];
  const idx = projects.findIndex((p) => p.slug === slug);
  const project = projects[idx];

  React.useEffect(() => {
    if (!project) navigate("/projects", { replace: true });
  }, [project, navigate]);

  if (!project) return null;

  const prev = projects[idx - 1];
  const next = projects[idx + 1];

  function openGallery(start: number = 0) {
    setImages(project.images ?? []);
    setIndex(start);
    setOpen(true);
  }

  return (
    <>
      {/* SEO per project */}
      <title>{project.title} — {siteConfig.name}</title>
      <meta name="description" content={project.summary} />

      <article className="container-max py-10 md:py-14">
        <div className="text-xs text-neutral-500">
          <Link to="/projects" className="hover:underline">Projects</Link>
          <span className="mx-2">/</span>
          <span>{project.title}</span>
        </div>

        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-neutral-900">
          {project.title}
        </h1>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech?.map((t) => (
            <span key={t} className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700">
              {t}
            </span>
          ))}
        </div>

        {project.images && project.images.length > 0 && (
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {project.images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`${project.title} ${i + 1}`}
                className="w-full rounded-2xl shadow-soft object-cover cursor-zoom-in"
                onClick={() => openGallery(i)}
              />
            ))}
          </div>
        )}

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {project.problem && (
            <section>
              <h2 className="text-lg font-semibold">Problem</h2>
              <p className="mt-2 text-neutral-700">{project.problem}</p>
            </section>
          )}

          <section>
            <h2 className="text-lg font-semibold">Approach</h2>
            <ul className="mt-2 list-disc pl-5 text-neutral-700">
              {project.approach?.map((a, i) => <li key={i}>{a}</li>)}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Challenges</h2>
            <ul className="mt-2 list-disc pl-5 text-neutral-700">
              {project.challenges?.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Optimizations</h2>
            <ul className="mt-2 list-disc pl-5 text-neutral-700">
              {project.optimizations?.map((o, i) => <li key={i}>{o}</li>)}
            </ul>
          </section>

          {project.impact && (
            <section className="md:col-span-2">
              <h2 className="text-lg font-semibold">Impact</h2>
              <p className="mt-2 text-neutral-700">{project.impact}</p>
            </section>
          )}
        </div>

        <div className="mt-10 flex items-center justify-between text-sm text-neutral-600">
          <div>
            {prev && <Link to={`/projects/${prev.slug}`} className="underline">← {prev.title}</Link>}
          </div>
          <div>
            {next && <Link to={`/projects/${next.slug}`} className="underline">{next.title} →</Link>}
          </div>
        </div>
      </article>

      <Lightbox
        open={open}
        onClose={() => setOpen(false)}
        images={images}
        index={index}
        onIndexChange={(i: number) => setIndex(i)}
        title={project.title}
      />
    </>
  );
}
