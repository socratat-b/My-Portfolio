import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function WorkExperienceSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className={`space-y-10 sm:space-y-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
      {/* Professional Experience */}
      <div className="space-y-6 sm:space-y-8">
        <h2 className="text-xs sm:text-sm font-semibold text-black/40 uppercase tracking-wider">
          Professional Experience
        </h2>

        {/* Quanby Solutions */}
        <div className="space-y-3 sm:space-y-4">
          <div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-black">Software Engineer</h3>
            <p className="text-sm sm:text-base text-black/60 font-medium mt-1">
              Quanby Solutions Inc. | September 2024 - March 2025
            </p>
          </div>
          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base lg:text-lg text-black/70 font-medium">
            <li className="flex gap-3">
              <span className="text-black/40 mt-1 flex-shrink-0">•</span>
              <span>
                Developed the Legazpi Civil Registry system's forms,
                validation logic, and database structure using Prisma with
                PostgreSQL, streamlining the registration process for births,
                deaths, marriages, and annotations.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-black/40 mt-1 flex-shrink-0">•</span>
              <span>
                Engineered offline-capable Flutter mobile app and SvelteKit
                web dashboard for PCIC's land tracking system, featuring
                real-time sync and administrative controls.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-black/40 mt-1 flex-shrink-0">•</span>
              <span>
                Contributed to quanbylab.com frontend development using
                Angular, enhancing user interface and functionality.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-black/40 mt-1 flex-shrink-0">•</span>
              <span>
                Developed and optimized company website (quanbyit.com) using
                WordPress, transitioning from internship to full-time role.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Freelance Work */}
      <div className="space-y-6 sm:space-y-8">
        <h2 className="text-xs sm:text-sm font-semibold text-black/40 uppercase tracking-wider">
          Freelance Work
        </h2>

        {/* Freelance */}
        <div className="space-y-3 sm:space-y-4">
          <div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-black">
              Fullstack Developer
            </h3>
            <p className="text-sm sm:text-base text-black/60 font-medium mt-1">
              Freelance | 2023 - Present
            </p>
          </div>
          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base lg:text-lg text-black/70 font-medium">
            <li className="flex gap-3">
              <span className="text-black/40 mt-1 flex-shrink-0">•</span>
              <span>
                Developed Bureau of Treasury (BTr) Client Portal with CodeIgniter 4 and Supabase
                for STI students, featuring multi-step document workflow for
                treasury form processing.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-black/40 mt-1 flex-shrink-0">•</span>
              <span>
                Built Ground Control Point (GCP) web application for Guinobatan City using Next.js
                and Leaflet.js, enabling interactive geospatial mapping for
                students of Bicol University.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-black/40 mt-1 flex-shrink-0">•</span>
              <span>
                Built Internet of Things (IoT) soil moisture monitoring system using Arduino and
                SMS module for real-time alerts for Polungui students.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
