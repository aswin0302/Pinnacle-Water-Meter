import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["About", "/about"],
  ["Products", "/products"],
  ["How It Works", "/#how-it-works"],
  ["Benefits", "/#benefits"],
  ["Applications", "/#applications"],
  ["Technology", "/#technology"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => setOpen(false);

  const handleSectionLink = (event, href) => {
    if (!href.startsWith("/#")) return;

    event.preventDefault();
    closeMenu();

    const sectionId = href.slice(2);

    const scrollToSection = () => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
      });
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToSection, 300);
    } else {
      scrollToSection();
      window.history.replaceState(null, "", `${location.pathname}${href.slice(1)}`);
    }
  };

  return (
    <header className="navbar">
      <Link
        to="/"
        className="brand"
        aria-label="Pinnacle Smart Water Meter Home"
        onClick={closeMenu}
      >
        <img
          src={`${import.meta.env.BASE_URL}images/SMART-METER-LOGO-Web.png`}
          alt="Pinnacle Smart Water Meter"
          className="brand-logo"
        />
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map(([label, href]) =>
          href.startsWith("/#") ? (
            <a
              href={`${import.meta.env.BASE_URL}${href.slice(2)}`}
              key={href}
              onClick={(event) => handleSectionLink(event, href)}
            >
              {label}
            </a>
          ) : (
            <Link
              to={href}
              key={href}
              onClick={closeMenu}
            >
              {label}
            </Link>
          )
        )}

        <Link
          to="/contact"
          className="nav-cta"
          onClick={closeMenu}
        >
          Get in Touch
          <ArrowUpRight size={16} />
        </Link>
      </nav>
    </header>
  );
}