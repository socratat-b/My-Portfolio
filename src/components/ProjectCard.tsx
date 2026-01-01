interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image?: string;
}

export default function ProjectCard({ title, description, tags, link, image }: ProjectCardProps) {
  return (
    <a
      href={link}
      className="group block overflow-hidden rounded-xl border border-black/10 bg-white hover:border-black/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      {/* Project Image */}
      <div className="aspect-video w-full overflow-hidden bg-black/5">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-black/30">
            <svg
              className="w-16 h-16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h4 className="text-lg font-bold tracking-tight text-black/80 mb-2 group-hover:text-black transition-colors">
          {title}
        </h4>

        <p className="text-sm text-black/60 mb-4 leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1.5 rounded-full bg-black/5 text-black/70 font-medium tracking-tight"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
