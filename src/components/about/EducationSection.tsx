import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function EducationSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-16">
      {/* Education Content */}
      <div className={`flex-1 flex flex-col space-y-5 sm:space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <h2 className="text-xs sm:text-sm font-semibold text-black/40 uppercase tracking-wider">
          Education
        </h2>

        <div className="space-y-4 sm:space-y-5 text-sm sm:text-base lg:text-lg leading-relaxed text-black/70 font-medium">
          <p>
            I graduated from Divine Word College of Legazpi in 2024 with a Bachelor of Science in Computer Science.
            DWCL is a comprehensive educational institution in the Bicol region known for its strong academic programs
            and commitment to holistic student development.
          </p>
          <p>
            During my time there, I received recognition as an Academic Achiever, earned Dean Lister honors for both
            semesters, and was awarded Best Thesis Project for my capstone.
          </p>
        </div>
      </div>

      {/* School Image */}
      <div className={`w-full lg:w-2/5 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}>
        <div className="space-y-2 sm:space-y-3">
          <img
            src="/College_Picture.jpg"
            alt="Divine Word College of Legazpi"
            className="w-full h-auto object-cover rounded-2xl border border-black/10"
          />
          <div className="px-2">
            <p className="text-xs sm:text-sm text-black/50 font-medium">
              Divine Word College of Legazpi during the day
            </p>
            <p className="text-xs text-black/40 mt-1">
              Photo by Allen Marc De Jesus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
