export default function InfoSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mt-16 lg:mt-24">
      {/* Single Image */}
      <div className="w-full lg:w-2/5">
        <img
          src="https://picsum.photos/500/600?random=5"
          alt="About photo"
          className="w-full h-auto object-cover rounded-3xl"
        />
      </div>

      {/* Info Content */}
      <div className="flex-1 flex flex-col space-y-6">
        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest">
          Info
        </h2>
        <div className="space-y-4 text-base lg:text-lg leading-relaxed text-gray-700">
          <p>
            My journey in tech began during my early college years at Divine
            Word College of Legazpi, where I discovered my passion for building
            full-stack applications. From academic achievements to hands-on
            projects, I've been focused on modern development practices and
            continuous learning, actively contributing to collaborative projects
            while maintaining industry standards and best practices.
          </p>
          <p>
            Throughout my career, I've had the opportunity to work with diverse
            technologies and frameworks, from building offline-capable mobile
            apps with Flutter to developing responsive web applications with
            React, Next.js, and SvelteKit. Each project has strengthened my
            commitment to writing clean, maintainable code and delivering
            innovative solutions.
          </p>
          <p>
            I believe in the power of collaboration and knowledge sharing. Whether
            it's mentoring team members, contributing to open-source projects, or
            staying current with emerging technologies, I'm driven by a genuine
            enthusiasm for creating impactful software that solves real-world
            problems.
          </p>
        </div>
      </div>
    </div>
  );
}
