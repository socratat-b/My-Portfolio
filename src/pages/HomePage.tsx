export default function HomePage() {
  // Sample projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Project Name",
      description: "A brief description of what this project does and the technologies used.",
      tags: ["React", "TypeScript", "Tailwind"],
      link: "#"
    },
    {
      id: 2,
      title: "Project Name",
      description: "A brief description of what this project does and the technologies used.",
      tags: ["Node.js", "Express", "MongoDB"],
      link: "#"
    },
    {
      id: 3,
      title: "Project Name",
      description: "A brief description of what this project does and the technologies used.",
      tags: ["Next.js", "PostgreSQL"],
      link: "#"
    }
  ];

  return (
    <main className="flex-1 lg:py-6 px-6 py-4 border border-black min-h-screen">
      {/* Intro Section */}
      <section className="max-w-4xl mx-auto py-8 md:py-16 lg:py-20">
        <h1 className="font-semibold tracking-tighter text-lg md:text-xl text-black/60 pb-3 md:pb-4">
          Hello there, Welcome!
        </h1>

        <div className="space-y-4 md:space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tighter font-black text-black/75 leading-tight">
            I am Scott Andrew T. Bedis
          </h2>

          <p className="text-xl md:text-2xl lg:text-3xl tracking-tight font-semibold text-black/60">
            A fullstack developer based in Albay, Philippines.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto">
        <div className="border-t border-black/20 my-8 md:my-12"></div>
      </div>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto pb-12 md:pb-20">
        <h3 className="text-2xl md:text-3xl tracking-tighter font-bold text-black/75 mb-6 md:mb-8">
          My Work
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="group border border-black/20 p-5 md:p-6 hover:border-black/40 transition-all duration-200 hover:shadow-sm"
            >
              <h4 className="text-lg md:text-xl font-bold tracking-tight text-black/75 mb-2 group-hover:text-black transition-colors">
                {project.title}
              </h4>

              <p className="text-sm md:text-base text-black/60 mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs md:text-sm px-2 py-1 bg-black/5 text-black/70 border border-black/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
