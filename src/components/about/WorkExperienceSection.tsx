export default function WorkExperienceSection() {
  return (
    <div className="mt-16 lg:mt-24 space-y-12">
      {/* Professional Experience */}
      <div className="space-y-8">
        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest">
          Professional Experience
        </h2>

        {/* Quanby Solutions */}
        <div className="space-y-3">
          <div>
            <p className="text-xl font-bold text-black">Software Engineer</p>
            <p className="text-base text-gray-600 font-medium">
              Quanby Solutions Inc. | September 2024 - March 2025
            </p>
          </div>
          <ul className="space-y-2 text-base text-gray-700">
            <li className="flex gap-3">
              <span className="text-black mt-1">•</span>
              <span>
                Developed the Legazpi Civil Registry system's forms,
                validation logic, and database structure using Prisma with
                PostgreSQL, streamlining the registration process for births,
                deaths, marriages, and annotations.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-black mt-1">•</span>
              <span>
                Engineered offline-capable Flutter mobile app and SvelteKit
                web dashboard for PCIC's land tracking system, featuring
                real-time sync and administrative controls.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-black mt-1">•</span>
              <span>
                Contributed to quanbylab.com frontend development using
                Angular, enhancing user interface and functionality.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-black mt-1">•</span>
              <span>
                Developed and optimized company website (quanbyit.com) using
                WordPress, transitioning from internship to full-time role.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Freelance Work */}
      <div className="space-y-8">
        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest">
          Freelance Work
        </h2>

        {/* Freelance */}
        <div className="space-y-3">
          <div>
            <p className="text-xl font-bold text-black">
              Fullstack Developer
            </p>
            <p className="text-base text-gray-600 font-medium">
              Freelance | 2023 - Present
            </p>
          </div>
          <ul className="space-y-2 text-base text-gray-700">
            <li className="flex gap-3">
              <span className="text-black mt-1">•</span>
              <span>
                Developed BTr Client Portal with CodeIgniter 4 and Supabase
                for STI students, featuring multi-step document workflow for
                treasury form processing in the Bureau of Treasury.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-black mt-1">•</span>
              <span>
                Built GCP web application for Guinobatan City using Next.js
                and Leaflet.js, enabling interactive geospatial mapping for
                students of Bicol University.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-black mt-1">•</span>
              <span>
                Built IoT soil moisture monitoring system using Arduino and
                SMS module for real-time alerts for Polungui students.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
