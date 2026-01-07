import { Mail, Linkedin, Github } from "lucide-react";

export default function SidebarConnect() {
  const links = [
    {
      name: "Email",
      href: "mailto:bedisscottandrew@gmail.com",
      external: false,
      icon: Mail
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/scott-bedis-19977a298/",
      external: true,
      icon: Linkedin
    },
    {
      name: "GitHub",
      href: "https://github.com",
      external: true,
      icon: Github
    }
  ];

  return (
    <div>
      <h3 className="text-xs font-semibold tracking-wider uppercase text-black/40 mb-4 px-3">
        Connect
      </h3>
      <ul className="space-y-1">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <li key={link.name}>
              <a
                href={link.href}
                {...(link.external && {
                  target: "_blank",
                  rel: "noopener noreferrer"
                })}
                className="text-sm font-medium tracking-tight text-black/60 transition-all duration-200 hover:text-black/90 flex items-center gap-3 py-2 px-3 rounded-md hover:bg-black/5"
              >
                <Icon size={16} className="flex-shrink-0" />
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
