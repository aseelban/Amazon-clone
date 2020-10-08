import React from "react";
import useStyles from "./styles/MobileNavigationStyle";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";

function MobileNavigation() {
  const [{ basket }] = useStateValue();
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.phone}>
        <nav className={classes.nav__icons}>
          <ul>
            <li>
              <Link to="/">
                <HomeOutlinedIcon />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <a>
                <FavoriteBorderIcon />
                <span>Wishlist</span>
              </a>
            </li>
            <li className={classes.checkout}>
              <Link to="/checkout">
                <ShoppingBasketOutlinedIcon />
                <span>Cart</span>
              </Link>
              {basket?.length ? <div>{basket?.length}</div> : ""}
            </li>
            <li>
              <a>
                <SearchOutlinedIcon />
                <span>Search</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MobileNavigation;
