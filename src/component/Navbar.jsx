import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/home">
          <h2>Omer Yagci</h2>
        </NavLink>
        <div>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/">Turkey Map</NavLink>
            </li>
            <li>
              <NavLink to="/">Turkey Province</NavLink>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/omer-yagci"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
