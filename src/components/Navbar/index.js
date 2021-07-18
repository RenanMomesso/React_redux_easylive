import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartLength = useSelector((state) => state.user.quantity);

  return (
    <>
      <nav className="Nav">
        <Link to="/"></Link>
        <div className="NavMenu">
          <Link to="/Home" className="NavLink" activeStyle>
            Home
          </Link>
        </div>
        <nav className="NavBtn">
          <Link className="NavBtnLink " to="/cart">
            {cartLength}
            <i class="fas fa-shopping-cart"></i>
          </Link>
        </nav>
      </nav>
    </>
  );
};

export default Navbar;
