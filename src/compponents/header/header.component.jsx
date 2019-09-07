import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg"; // Special syntax in react to import SVG

import "./header.styles.scss";

const Header = ({ user }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {user ? (<Link className="option" to="/signout">
        SIGN OUT
      </Link>):
      (<Link className="option" to="/signin">
        SIGN IN
      </Link>)}
    </div>
  </div>
);

export default Header;
