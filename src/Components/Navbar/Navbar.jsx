import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

import { FaUser, FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className="Brand">
          <img src={logo} alt="Spotify" /> Spotify
        </li>
        <li>
          <Link className="nav_item" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav_item" to="/songs">
            Songs
          </Link>
        </li>
      </ul>
      {/* <div className="Auth">
        <div className="sigin">
          <FaSignInAlt size={25} />
          Sigin
        </div>
        <div className="login">
          <Link to="/login">
            <FaUser />
            Login
          </Link>

          {/* <FaSignOutAlt />
          Logout */}
      {/* </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
