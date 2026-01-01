export default function SidebarConnect() {
  return (
    <div>
      <h3 className="text-xs font-bold tracking-wider uppercase text-black/60 mb-4">
        Contact
      </h3>
      <ul className="space-y-4">
        <li>
          <a
            href="mailto:bedisscottandrew@gmail.com"
            className="text-lg tracking-tight font-medium"
          >
            Email
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/scott-bedis-19977a298/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg tracking-tight font-medium"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/scottandrew.bedis/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg tracking-tight font-medium"
          >
            Facebook
          </a>
        </li>
      </ul>
    </div>
  );
}
