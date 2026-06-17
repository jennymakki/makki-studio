import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-2xl md:text-3xl font-semibold">
        Utvalda projekt
      </h2>

      <p className="text-gray-400 mt-2">
        Några saker jag har byggt nyligen.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            <h3 className="font-medium text-lg">{project.title}</h3>
            <p className="text-gray-400 mt-2 text-sm">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}