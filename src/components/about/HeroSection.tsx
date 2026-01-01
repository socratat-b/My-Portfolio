export default function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
      {/* Info Section - Name (Left on Desktop) */}
      <div className="flex-1 flex flex-col justify-center order-2 lg:order-1">
        <h1 className="text-5xl lg:text-6xl font-black tracking-tighter">
          Scott Andrew T. Bedis
        </h1>
        <p className="text-2xl lg:text-3xl font-medium text-gray-600 mt-2">
          /Tat/
        </p>
      </div>

      {/* Bento Grid - Images Section (Right on Desktop) */}
      <div className="w-full lg:w-1/2 order-1 lg:order-2">
        <div className="grid grid-cols-4 grid-rows-4 gap-3 aspect-square">
          {/* Large image - top left */}
          <div className="col-span-2 row-span-2">
            <img
              src="https://picsum.photos/400/400?random=1"
              alt="Photo 1"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Tall image - top right */}
          <div className="col-span-2 row-span-3">
            <img
              src="https://picsum.photos/400/600?random=2"
              alt="Photo 2"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Bottom left - horizontal */}
          <div className="col-span-2 row-span-2">
            <img
              src="https://picsum.photos/400/400?random=3"
              alt="Photo 3"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Small bottom right */}
          <div className="col-span-2 row-span-1">
            <img
              src="https://picsum.photos/400/200?random=4"
              alt="Photo 4"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
