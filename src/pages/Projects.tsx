import React from "react";
import { siteConfig } from "../config/siteConfig";
import ProjectCard from "../components/ProjectCard";
import Lightbox from "../components/Lightbox";
import Reveal from "../components/Reveal";

export default function Projects() {
  const projects = siteConfig.projects;

  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [activeImages, setActiveImages] = React.useState<string[]>([]);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [activeTitle, setActiveTitle] = React.useState<string>("");

  function openGallery(p: (typeof projects)[number], start = 0) {
    setActiveImages(p.images || []);
    setActiveIndex(start);
    setActiveTitle(p.title);
    setLightboxOpen(true);
  }

  return (
    <section className="container-max py-10 md:py-14">
      {/* Hero */}
      <Reveal as="header" className="max-w-3xl">
        <p className="uppercase tracking-[0.15em] text-neutral-500 text-xs md:text-sm">
          Projects
        </p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-neutral-900">
          Selected case studies
        </h1>
        <p className="mt-3 text-neutral-700">
          Problem → Approach → Challenges → Optimizations → Impact, plus screenshots.
        </p>
      </Reveal>

      {/* Grid (each card animates itself) */}
      <div className="mt-8 grid grid-cols-1 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.slug} p={p as any} onOpen={openGallery} />
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && activeImages.length > 0 && (
        <Lightbox
          images={activeImages}
          openIndex={activeIndex}
          onIndex={setActiveIndex}
          onClose={() => setLightboxOpen(false)}
          caption={activeTitle}
        />
      )}
    </section>
  );
}
