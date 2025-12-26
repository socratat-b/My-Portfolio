import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex backdrop-blur-xs justify-between items-center px-6 py-4 md:px-12 md:py-6 lg:hidden sticky top-0">
      <Link to={"/"} className="font-black tracking-tighter text-2xl">
        Tat
      </Link>

      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <Link className="text-lg tracking-tight font-medium" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="text-lg tracking-tight font-medium" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="text-lg tracking-tight font-medium" to="">
              CV
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
