import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function InfoSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-16">
      {/* Single Image */}
      <div className={`w-full lg:w-2/5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}>
        <div className="space-y-2 sm:space-y-3">
          <img
            src="/me_holding_my_thesis.jpeg"
            alt="Scott Andrew T. Bedis holding thesis"
            className="w-full h-auto object-cover rounded-2xl border border-black/10"
          />
          <div className="px-2">
            <p className="text-xs sm:text-sm text-black/50 font-medium">
              Holding my thesis book
            </p>
          </div>
        </div>
      </div>

      {/* Info Content */}
      <div className={`flex-1 flex flex-col space-y-5 sm:space-y-6 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <h2 className="text-xs sm:text-sm font-semibold text-black/40 uppercase tracking-wider">
          About Me
        </h2>
        <div className="space-y-4 sm:space-y-5 text-sm sm:text-base lg:text-lg leading-relaxed text-black/70 font-medium">
          <p>
            I'm a fullstack developer who loves exploring different modern technologies and trying to build something out of them.
            Whether it's experimenting with new frameworks, diving into unfamiliar tools, or tackling interesting problems,
            I enjoy the process of learning and creating.
          </p>
          <p>
            Recently, I've been focused on web development using React and Next.js as my main frameworks. I've worked on diverse
            projects—from civil registry systems to geospatial mapping platforms.
            Each project has pushed me to explore different domains and technologies.
          </p>
          <p>
            Beyond web development, I've also explored mobile development with Flutter, backend systems with Supabase and Node.js,
            and even worked with SvelteKit and Angular. I believe in staying curious and continuously expanding my toolkit while
            maintaining focus on writing clean, maintainable code.
          </p>
        </div>
      </div>
    </div>
  );
}
