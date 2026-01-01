import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  // Sample projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Project Name",
      description: "A brief description of what this project does and the technologies used.",
      tags: ["React", "TypeScript", "Tailwind"],
      link: "#",
      image: ""
    },
    {
      id: 2,
      title: "Project Name",
      description: "A brief description of what this project does and the technologies used.",
      tags: ["Node.js", "Express", "MongoDB"],
      link: "#",
      image: ""
    },
    {
      id: 3,
      title: "Project Name",
      description: "A brief description of what this project does and the technologies used.",
      tags: ["Next.js", "PostgreSQL"],
      link: "#",
      image: ""
    },
    {
      id: 4,
      title: "Project Name",
      description: "A brief description of what this project does and the technologies used.",
      tags: ["Vue.js", "Firebase"],
      link: "#",
      image: ""
    },
    {
      id: 5,
      title: "Project Name",
      description: "A brief description of what this project does and the technologies used.",
      tags: ["Python", "Django", "PostgreSQL"],
      link: "#",
      image: ""
    },
    {
      id: 6,
      title: "Project Name",
      description: "A brief description of what this project does and the technologies used.",
      tags: ["React Native", "Expo"],
      link: "#",
      image: ""
    }
  ];

  return (
    <main className="flex-1 px-6 py-8 md:px-12 md:py-12 lg:px-16 lg:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-tighter font-black text-black/75 mb-4">
            My Projects
          </h1>
          <p className="text-base md:text-lg text-black/60 max-w-2xl">
            A collection of projects I've worked on. From web applications to mobile apps,
            each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
      </div>
    </main>
  );
}
