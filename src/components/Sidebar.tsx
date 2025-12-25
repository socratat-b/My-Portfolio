import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <aside className="hidden lg:flex flex-col items-center py-6 sticky h-dvh inset-y-0 left-0 w-56 border border-black ">
      <Link
        to={"/"}
        className="font-black tracking-tighter text-2xl mb-8 block"
      >
        Tat
      </Link>

      <nav>
        <ul className="space-y-4">
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
            <Link className="text-lg tracking-tight font-medium" to="/">
              CV
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
