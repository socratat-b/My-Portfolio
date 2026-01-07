export default function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-16">
      {/* Info Section - Name (Left on Desktop) */}
      <div className="flex-1 flex flex-col justify-center order-2 lg:order-1 animate-fadeIn">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-black">
          Scott Andrew T. Bedis
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-black/60 mt-3 sm:mt-4">
          /Tat/
        </p>
      </div>

      {/* Single Image Section (Right on Desktop) */}
      <div className="w-full lg:w-1/2 order-1 lg:order-2 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
        <img
          src="/me.jpg"
          alt="Scott Andrew T. Bedis"
          className="w-full h-auto object-cover rounded-2xl border border-black/10"
        />
      </div>
    </div>
  );
}
