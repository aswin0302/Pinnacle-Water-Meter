
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

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
      });

      window.history.replaceState(null, "", href);
    }
  };

  return (
    <header className="navbar">
      <Link
        to="/#home"
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
        {links.map(([label, href]) => (
          <a
            href={href}
            key={href}
            onClick={(event) => {
              if (href.startsWith("/#")) {
                handleSectionLink(event, href);
              } else {
                closeMenu();
              }
            }}
          >
            {label}
          </a>
        ))}

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
