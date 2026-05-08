import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../data/siteData";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dumbbellIcon = `${import.meta.env.BASE_URL}assets/dumbell-grey.svg`;

  return (
    <header className="site-header">
      <div className="container header-bar">
        <Link className="brand" to="/" onClick={() => setMenuOpen(false)}>
          <span className="brand-top">Fitness</span>
          <span className="brand-bottom">HUB</span>
        </Link>

        <nav className={`site-nav ${menuOpen ? "is-open" : ""}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <Link className="header-icon" to="/store" aria-label="Visit store">
            <img src={dumbbellIcon} alt="Dumbbell icon" />
          </Link>
        </div>

        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Header;
