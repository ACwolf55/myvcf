import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/new-card">
      <header>
        <div className="header-sides">
          <img src="/gold-badge-left.png"></img>
        </div>

        <div className="header-center">
          <img className="logo" src="/myVcard_logo.jpg"></img>
        </div>

        <div className="header-sides">
          <img src="/gold-badge-right.png"></img>
        </div>
      </header>
    </Link>
  );
};

export default Header;
