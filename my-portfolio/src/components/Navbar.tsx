import { useState } from "react";
import { CloseIcon, MenuIcon } from "./Icons";

const links = [
  { href: "#about", label: "Über mich" },
  { href: "#projects", label: "Projekte" },
  { href: "#experience", label: "Erfahrung" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Kontakt" }
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-dark-border/60 bg-dark-bg/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between" aria-label="Hauptmenü">
        <a href="#top" className="text-lg font-bold text-white">
          Elmar<span className="text-primary">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-white transition-colors duration-300">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-gray-300 hover:text-white"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden border-t border-dark-border px-4 py-2">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)} className="block py-3 text-gray-300 hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Navbar;
