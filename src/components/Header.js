import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#myPage">
            Logo
          </a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Services">Services</Link>
            </li>

            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Admin">Admin</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
