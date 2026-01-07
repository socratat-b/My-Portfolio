import { NavLink, Link } from "react-router-dom";
import { User, FolderKanban, FileText } from "lucide-react";
import SidebarConnect from "./SidebarConnect";

export default function SideBar() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-base font-medium tracking-tight transition-all duration-200 hover:text-black relative group ${
      isActive
        ? "text-black font-semibold"
        : "text-black/60 hover:text-black/90"
    }`;

  return (
    <aside className="hidden lg:flex flex-col sticky h-dvh inset-y-0 left-0 w-64 border-r border-black/10 bg-white">
      {/* Header Section */}
      <div className="flex flex-col px-8 pt-12 pb-8">
        <Link
          to={"/"}
          className="group"
        >
          <h1 className="font-bold tracking-tight text-3xl text-black mb-2 transition-colors duration-200 group-hover:text-black/80">
            Tat
          </h1>
          <p className="text-sm font-medium text-black/50 tracking-wide">
            Fullstack Developer
          </p>
        </Link>
      </div>

      {/* Navigation Section */}
      <nav className="px-8 py-6">
        <ul className="space-y-1">
          <li>
            <NavLink className={navLinkClass} to="/about">
              <span className="flex items-center gap-3 py-2 px-3 rounded-md transition-colors duration-200 hover:bg-black/5">
                <User size={18} className="flex-shrink-0" />
                About
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink className={navLinkClass} to="/projects">
              <span className="flex items-center gap-3 py-2 px-3 rounded-md transition-colors duration-200 hover:bg-black/5">
                <FolderKanban size={18} className="flex-shrink-0" />
                Projects
              </span>
            </NavLink>
          </li>
          <li>
            <a
              className="text-base font-medium tracking-tight text-black/60 transition-all duration-200 hover:text-black/90"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center gap-3 py-2 px-3 rounded-md transition-colors duration-200 hover:bg-black/5">
                <FileText size={18} className="flex-shrink-0" />
                CV
              </span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Spacer to push contact to bottom */}
      <div className="grow"></div>

      {/* Separator */}
      <div className="border-t border-black/10 mx-8"></div>

      {/* Contact Section */}
      <div className="px-8 py-8">
        <SidebarConnect />
      </div>
    </aside>
  );
}
