import { NavLink } from "react-router-dom";

const activeLink = "nav-list__link nav-list__link--active";
const normalLink = "nav-list__link";

function NavbarComponent(props) {
  return (
    <li className="nav-list__item">
      <NavLink
        to={props.path}
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        {props.title}
      </NavLink>
    </li>
  );
}

export default NavbarComponent;
