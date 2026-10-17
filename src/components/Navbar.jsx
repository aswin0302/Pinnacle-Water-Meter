import { useState } from "react";
import { Menu, X, Droplets } from "lucide-react";

const links = [
  ["About", "#about"],
  ["Products", "#product"],
  ["How It Works", "#how-it-works"],
  ["Applications", "#applications"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <a
        href="#home"
        className="brand"
        onClick={() => setOpen(false)}
      >
        <Droplets size={25} />
        <span>PINNACLE</span>
      </a>

      <button
        className="menu-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>

      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map(([label, href]) => (
          <a
            href={href}
            key={href}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}

        <a
          href="#contact"
          className="nav-cta"
          onClick={() => setOpen(false)}
        >
          Get in Touch
        </a>
      </nav>
    </header>
  );
}