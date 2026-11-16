import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";

const solutionLinks = [
  ["Apartments", "/apartments"],
  ["Villas", "/villas"],
  ["Industries", "/industries"],
  ["Hotels", "/hotels"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
    setSolutionsOpen(false);
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
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/products" onClick={closeMenu}>
          Products
        </Link>

        <div className="nav-dropdown">
          <button
            type="button"
            className="nav-dropdown-toggle"
            aria-expanded={solutionsOpen}
            onClick={() => setSolutionsOpen(!solutionsOpen)}
          >
            Solutions
            <ChevronDown size={16} />
          </button>

          <div
            className={
              solutionsOpen
                ? "nav-dropdown-menu show"
                : "nav-dropdown-menu"
            }
          >
            {solutionLinks.map(([label, href]) => (
              <Link key={href} to={href} onClick={closeMenu}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        <Link to="/how-it-works" onClick={closeMenu}>
          How It Works
        </Link>

        <Link to="/about" onClick={closeMenu}>
          About Us
        </Link>

        <Link to="/contact" onClick={closeMenu}>
          Contact Us
        </Link>

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