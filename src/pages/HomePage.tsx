import ProjectCard from "../components/ProjectCard";
import { Coffee, MapPin, Code2, Sparkles } from "lucide-react";

export default function HomePage() {
  const projects = [
    {
      id: 1,
      title: "Order Bean",
      description: "A fullstack cafe ordering & management system with real-time order processing, menu management, and analytics.",
      tags: ["Next.js", "React", "Prisma", "Supabase", "TypeScript", "Tailwind CSS"],
      link: "https://order-bean.vercel.app/",
      image: "/order-bean-preview.jpeg"
    },
    {
      id: 2,
      title: "GuinoPinPoint",
      description: "A Ground Control Point (GCP) finder application for Guinobatan, Albay. Features interactive mapping with filtering by barangay, remarks, and type, along with detailed GCP information and navigation.",
      tags: ["React", "Leaflet", "TypeScript", "Tailwind CSS"],
      link: "https://guinopinpoint-nu.vercel.app/",
      image: "/GuinoPinPoint_Preview.png"
    }
  ];

  return (
    <main className="flex-1 px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-12 lg:px-16 lg:py-16 xl:px-20 xl:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 xl:py-28">
          {/* Greeting */}
          <div className="flex items-center gap-2 mb-4 sm:mb-5 md:mb-6">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
            <h1 className="font-semibold tracking-tight text-base sm:text-lg md:text-xl text-black/60">
              Hello there, Welcome!
            </h1>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight font-bold text-black leading-[1.1]">
              I'm Scott Andrew T. Bedis
            </h2>

            {/* Subheading with personality */}
            <div className="space-y-3 sm:space-y-4">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-tight font-medium text-black/70 leading-relaxed">
                A fullstack developer crafting digital experiences
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm sm:text-base md:text-lg text-black/60">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="font-medium">Albay, Philippines</span>
                </div>
                <span className="text-black/30">•</span>
                <div className="flex items-center gap-2">
                  <Coffee className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-[#6F4E37]" />
                  <span className="font-medium">Fueled by coffee</span>
                </div>
                <span className="text-black/30">•</span>
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="font-medium">Building with code</span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-4 sm:pt-6 md:pt-8 lg:hidden">
              <a
                href="#footer"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg bg-black text-white text-sm sm:text-base font-semibold tracking-tight hover:bg-black/90 transition-all hover:shadow-lg hover:scale-105 active:scale-100"
              >
                <Coffee className="w-4 h-4 sm:w-5 sm:h-5" />
                Let's Connect
              </a>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-black/10 my-8 sm:my-10 md:my-12 lg:my-16"></div>

        {/* Projects Section */}
        <section id="projects" className="pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24">
          <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-black mb-2 sm:mb-3">
              Featured Work
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-black/60 font-medium">
              Projects I've built with passion and coffee
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
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
