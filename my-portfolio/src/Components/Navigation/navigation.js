import React from "react";
import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <div>
      <h1>Navigation</h1>
      <div>
        <Link to="/logo">
          <li>
            <img
              src="https://i.pinimg.com/474x/77/5b/91/775b91d4b1bfcac2aa3292b47763c1b1.jpg"
              alt="logo pic"
            />
          </li>
        </Link>
      </div>
      <div>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/profile">
            <li>Profile</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
