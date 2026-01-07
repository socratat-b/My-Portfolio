import { NavLink, Link } from "react-router-dom";
import { User, FolderKanban, FileText } from "lucide-react";

export default function Header() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-base font-medium tracking-tight transition-colors duration-200 ${
      isActive
        ? "text-black font-semibold"
        : "text-black/60 hover:text-black/90"
    }`;

  return (
    <header className="flex backdrop-blur-md bg-white/80 justify-between items-center px-6 py-4 md:px-12 md:py-5 lg:hidden sticky top-0 border-b border-black/10 z-50">
      <Link to={"/"} className="font-bold tracking-tight text-2xl text-black transition-colors hover:text-black/80">
        Tat
      </Link>

      <nav>
        <ul className="flex items-center gap-6">
          <li>
            <NavLink className={navLinkClass} to="/about">
              <span className="flex items-center gap-2">
                <User size={18} className="flex-shrink-0" />
                <span className="hidden sm:inline">About</span>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink className={navLinkClass} to="/projects">
              <span className="flex items-center gap-2">
                <FolderKanban size={18} className="flex-shrink-0" />
                <span className="hidden sm:inline">Projects</span>
              </span>
            </NavLink>
          </li>
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium tracking-tight text-black/60 transition-colors duration-200 hover:text-black/90"
            >
              <span className="flex items-center gap-2">
                <FileText size={18} className="flex-shrink-0" />
                <span className="hidden sm:inline">CV</span>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
