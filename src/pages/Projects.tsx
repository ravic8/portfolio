import React from "react";
import { siteConfig } from "../config/siteConfig";
import ProjectCard from "../components/ProjectCard";
import Lightbox from "../components/Lightbox";
import Reveal from "../components/Reveal";
import type { Project } from "../config/siteConfig";

export default function Projects() {
  const projects = siteConfig.projects as Project[];

  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [activeImages, setActiveImages] = React.useState<string[]>([]);
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const [activeTitle, setActiveTitle] = React.useState<string>("");

  function openGallery(p: Project, start: number = 0) {
    setActiveImages(p.images || []);
    setActiveIndex(start);
    setActiveTitle(p.title);
    setLightboxOpen(true);
  }

  return (
    <>
      {/* SEO driven by siteConfig */}
      <title>Projects — {siteConfig.name}</title>
      <meta name="description" content={`Selected projects by ${siteConfig.name}`} />

      <section className="container-max py-10 md:py-14">
        <Reveal>
          <h1 className="text-2xl md:text-3xl font-bold text-neutral-900">Projects</h1>
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard
              key={p.slug}
              p={p}
              onOpen={(proj, start) => openGallery(proj, start ?? 0)}
            />
          ))}
        </div>
      </section>

      <Lightbox
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={activeImages}
        index={activeIndex}
        title={activeTitle}
        onIndexChange={(i: number) => setActiveIndex(i)}
      />
    </>
  );
}
