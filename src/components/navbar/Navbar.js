import { NavLink } from "react-router-dom";
import BtnDarkTheme from "../btnDarkTheme/BtnDarkTheme";
import NavbarComponent from "./NavbarComponent";

import "./style.css";

function Navbar() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <div className="logo">
            <strong className="purple">FrontEnd developer</strong> portfolio
          </div>

          <BtnDarkTheme />

          <ul className="nav-list">
            <NavbarComponent path="" title="Home" />
            <NavbarComponent path="projects" title="Projects" />
            <NavbarComponent path="skills" title="Skills" />
            <NavbarComponent path="/contacts" title="Contacts" />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
