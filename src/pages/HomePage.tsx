import ProjectCard from "../components/ProjectCard";

export default function HomePage() {
  // Sample projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Project Name",
      description: "A brief description of what this project does and the technologies used.",
      tags: ["React", "TypeScript", "Tailwind"],
      link: "#",
      image: "" // Add your project image URL here
    },
    {
      id: 2,
      title: "Project Name",
      description: "A brief description of what this project does and the technologies used.",
      tags: ["Node.js", "Express", "MongoDB"],
      link: "#",
      image: "" // Add your project image URL here
    },
    {
      id: 3,
      title: "Project Name",
      description: "A brief description of what this project does and the technologies used.",
      tags: ["Next.js", "PostgreSQL"],
      link: "#",
      image: "" // Add your project image URL here
    }
  ];

  return (
    <main className="flex-1 px-6 py-8 md:px-12 md:py-12 lg:px-16 lg:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Intro Section */}
        <section className="py-8 md:py-16 lg:py-20">
        <h1 className="font-semibold tracking-tighter text-lg md:text-xl text-black/60 pb-3 md:pb-4">
          Hello there, Welcome!
        </h1>

        <div className="space-y-6 md:space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tighter font-black text-black/75 leading-tight">
            I am Scott Andrew T. Bedis
          </h2>

          <p className="text-xl md:text-2xl lg:text-3xl tracking-tight font-semibold text-black/60">
            A fullstack developer based in Albay, Philippines.
          </p>

          {/* Call to Action */}
          <div className="pt-2">
            <a
              href="mailto:your-email@example.com"
              className="inline-flex items-center px-8 py-3.5 rounded-lg bg-black text-white font-medium tracking-tight hover:bg-black/90 transition-all hover:shadow-lg"
            >
              Connect with Me
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-black/20 my-8 md:my-12"></div>

      {/* Projects Section */}
      <section id="projects" className="pb-12 md:pb-20">
        <h3 className="text-2xl md:text-3xl tracking-tighter font-bold text-black/75 mb-6 md:mb-8">
          My Work
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
              image={project.image}
            />
          ))}
        </div>
      </section>
      </div>
    </main>
  );
}
