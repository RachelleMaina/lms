import React  from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
      <div className="header">
        <span className="brand">LMS</span>
        <ul>
          <li>
            <NavLink exact to="/" className="link">
              Articles
            </NavLink>
          </li>
          <li>
            <NavLink to="/people" className="link">
              People
            </NavLink>
          </li>
          <li>
            <NavLink to="/todo" className="link">
              Todo
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
export default Header;
