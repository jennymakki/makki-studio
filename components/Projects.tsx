"use client";

import { projects } from "@/data/projects";
import { Card } from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className=" bg-background mx-auto max-w-6xl px-6 py-24 md:px-12 md:py-18"
    >
      {/* Section heading */}
      <div className="max-w-2xl">
        <h2 className="text-3xl font-medium tracking-tight text-heading md:text-4xl">
          Utvalda projekt
        </h2>

        <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
          Ett urval av webbplatser och applikationer jag har
          designat och utvecklat – från företagswebbplatser och
          e-handel till skräddarsydda digitala verktyg.
        </p>
      </div>

      {/* Projects grid */}
      <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:gap-x-10 lg:gap-y-16">
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            url={project.url}
          />
        ))}
      </div>
    </section>
  );
}
