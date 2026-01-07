import { useState } from "react";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image?: string;
}

export default function ProjectCard({ title, description, tags, link, image }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const showSeeMore = description.length > 100;

  return (
    <article className="group block overflow-hidden rounded-2xl border border-black/10 bg-white/90 backdrop-blur-sm hover:border-black/20 hover:bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full flex flex-col">
      {/* Project Image */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="aspect-video w-full overflow-hidden bg-gradient-to-br from-black/5 to-black/10 block relative group/image"
      >
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover/image:scale-110"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-black/30">
            <svg
              className="w-12 h-12 sm:w-16 sm:h-16"
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
        <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/5 transition-colors duration-300"></div>
      </a>

      {/* Project Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 group/title mb-3"
        >
          <h4 className="text-lg sm:text-xl font-bold tracking-tight text-black group-hover/title:text-black/70 transition-colors">
            {title}
          </h4>
          <ExternalLink className="w-4 h-4 text-black/40 group-hover/title:text-black/60 transition-all group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5" />
        </a>

        <p className={`text-sm sm:text-base text-black/60 mb-3 leading-relaxed ${!isExpanded && showSeeMore ? 'line-clamp-2' : ''}`}>
          {description}
        </p>

        {showSeeMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs sm:text-sm font-semibold text-black/70 hover:text-black transition-colors mb-4 text-left underline underline-offset-2"
          >
            {isExpanded ? 'Show less' : 'Read more'}
          </button>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-black/5 text-black/70 font-medium tracking-tight hover:bg-black/10 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
