import { projects } from "@/data/projects";
import { Card } from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-5">
      <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#2F5D50]">
        Utvalda projekt
      </h2>

      <p className="mt-4 max-w-2xl text-base md:text-lg text-[#3A3A3A] leading-relaxed">
        Ett urval av webbplatser och applikationer jag har designat och
        utvecklat — från företagswebbplatser och e-handel till skräddarsydda
        digitala verktyg.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
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
