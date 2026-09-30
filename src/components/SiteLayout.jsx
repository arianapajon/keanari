import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Heart, Home as HomeIcon, UserRound, Sparkles, Mail } from "lucide-react";
import lace from "../assets/lace.png";

const links = [
  { to: "/", label: "home", icon: HomeIcon, end: true },
  { to: "/about", label: "profile", icon: UserRound },
  { to: "/music", label: "music", icon: Sparkles },
  { to: "/projects", label: "projects", icon: Mail },
];

export default function SiteLayout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div
    className="lace-decoration"
    style={{ backgroundImage: `url(${lace})` }}
  ></div>

        <div className="brand">
          <span>♡</span> my little space
        </div>

        <nav className="nav-pills" aria-label="Main navigation">
          {links.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => `nav-pill ${isActive ? "active" : ""}`}
            >
              <Icon size={13} />
              {label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="page">
        <Outlet />
      </main>

      <footer className="footer">
        <span>keanari</span>
        <span>✦</span>
        <span>2026</span>
      </footer>
    </div>
  );
}