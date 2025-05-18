import React from "react";
import "./navbar.scss";
import logo from "/logo.svg";
import logoText from "/logo-text.svg";
import { Link, NavLink } from "react-router-dom";
import navbar_links from "../../constants";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
          <img src={logoText} alt="text" />
        </Link>
      </div>

      <nav className="navbar__menu">
        <ul>
          {navbar_links.map((item) => (
            <li key={item.route}>
              <NavLink
                to={item.route}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
