import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

type TabType = "professional" | "freelance" | "sideProjects";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<TabType>("professional");

  // Projects organized by category
  const professionalProjects = [
    {
      id: 1,
      title: "Legazpi Civil Registry System",
      description: "Developed forms, validation logic, and database structure using Prisma with PostgreSQL, streamlining the registration process for births, deaths, marriages, and annotations.",
      tags: ["React", "Prisma", "PostgreSQL", "TypeScript"],
      link: "#",
      image: ""
    },
    {
      id: 2,
      title: "PCIC Land Tracking System",
      description: "Engineered offline-capable Flutter mobile app and SvelteKit web dashboard featuring real-time sync and administrative controls.",
      tags: ["Flutter", "SvelteKit", "TypeScript"],
      link: "#",
      image: ""
    },
    {
      id: 3,
      title: "Quanby Lab Website",
      description: "Contributed to quanbylab.com frontend development using Angular, enhancing user interface and functionality.",
      tags: ["Angular", "TypeScript", "SCSS"],
      link: "https://quanbylab.com",
      image: ""
    },
    {
      id: 4,
      title: "Quanby IT Website",
      description: "Developed and optimized company website using WordPress, transitioning from internship to full-time role.",
      tags: ["WordPress", "PHP", "CSS"],
      link: "https://quanbyit.com",
      image: ""
    }
  ];

  const freelanceProjects = [
    {
      id: 5,
      title: "Bureau of Treasury (BTr) Client Portal",
      description: "Built with CodeIgniter 4 and Supabase for STI students, featuring multi-step document workflow for treasury form processing.",
      tags: ["CodeIgniter", "Supabase", "PHP", "JavaScript"],
      link: "#",
      image: ""
    },
    {
      id: 6,
      title: "Ground Control Point (GCP) Web Application",
      description: "Built for Guinobatan City using Next.js and Leaflet.js, enabling interactive geospatial mapping for students of Bicol University.",
      tags: ["Next.js", "Leaflet.js", "TypeScript", "Tailwind CSS"],
      link: "https://guinopinpoint-nu.vercel.app/",
      image: "/GuinoPinPoint_Preview.png"
    },
    {
      id: 7,
      title: "IoT Soil Moisture Monitoring System",
      description: "Built using Arduino and SMS module for real-time alerts for Polungui students.",
      tags: ["Arduino", "C++", "IoT"],
      link: "#",
      image: ""
    }
  ];

  const sideProjects = [
    {
      id: 8,
      title: "Order Bean",
      description: "A fullstack cafe ordering & management system with real-time order processing, menu management, and analytics.",
      tags: ["Next.js", "React", "Prisma", "Supabase", "TypeScript", "Tailwind CSS"],
      link: "https://order-bean.vercel.app/",
      image: "/order-bean-preview.jpeg"
    }
  ];

  const getCurrentProjects = () => {
    switch (activeTab) {
      case "professional":
        return professionalProjects;
      case "freelance":
        return freelanceProjects;
      case "sideProjects":
        return sideProjects;
      default:
        return professionalProjects;
    }
  };

  const tabs = [
    { id: "professional" as TabType, label: "Professional" },
    { id: "freelance" as TabType, label: "Freelance" },
    { id: "sideProjects" as TabType, label: "Side Projects" }
  ];

  return (
    <main className="flex-1 px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-12 lg:px-16 lg:py-16 xl:px-20 xl:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-bold text-black mb-3 sm:mb-4">
            My Projects
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-black/60 font-medium max-w-2xl">
            A collection of projects I've worked on. From web applications to mobile apps,
            each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="flex flex-wrap gap-2 sm:gap-3 border-b border-black/10 pb-4 sm:pb-5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-semibold tracking-tight transition-all ${
                  activeTab === tab.id
                    ? "bg-black text-white"
                    : "text-black/60 hover:text-black hover:bg-black/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
          {getCurrentProjects().map((project) => (
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
