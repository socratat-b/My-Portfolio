import { useScrollReveal } from "../../hooks/useScrollReveal";
import { Code2, BookOpen, GitBranch, Lightbulb } from "lucide-react";

export default function InterestsSection() {
  const { ref, isVisible } = useScrollReveal();

  const interests = [
    {
      title: "Coding",
      description:
        "Building innovative solutions and exploring new technologies",
      icon: Code2,
    },
    {
      title: "Learning",
      description:
        "Constantly expanding my knowledge in web development and design",
      icon: BookOpen,
    },
    {
      title: "Open Source",
      description: "Contributing to projects and collaborating with developers",
      icon: GitBranch,
    },
    {
      title: "Problem Solving",
      description: "Tackling complex challenges and finding creative solutions",
      icon: Lightbulb,
    },
  ];

  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
      <div className="space-y-6 sm:space-y-8">
        <h2 className="text-xs sm:text-sm font-semibold text-black/40 uppercase tracking-wider">
          Things I Love
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <div key={index} className="flex gap-4 sm:gap-5">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-black/40" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold tracking-tight text-black">
                    {interest.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-black/70 leading-relaxed font-medium">
                    {interest.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
