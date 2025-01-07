import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav className="sidebarr">
      <ul className="sidebar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/AboutMe">About Me</Link>
        </li>
        <li>
          <Link to="/Experience">Experiences</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <li>
          <Link to="/Contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
