import React, { useEffect, useState } from "react";
import "./styles/Header.css";
import logo from "./img/amazon-logo.png";
import SearchIcon from "@material-ui/icons/Search";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { auth } from "../firebase";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    console.log(user);
    console.log(basket);
    if (user) {
      auth.signOut();
    }

    console.warn("clicked");
  };
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {user ? user.email : "Guset"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <LocalMallOutlinedIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
