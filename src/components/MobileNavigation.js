import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/MobileNavigationStyle";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Link } from "react-router-dom";

function MobileNavigation({ classes }) {

  return (
    <div className={classes.MobileNavigation__wrapper}>
      <div className={classes.MobileNavigation__phone}>
        <nav className={classes.MobileNavigation__nav__icons}>
          <ul>
            <li>
              <Link to="/">
                <HomeOutlinedIcon />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <a href="#news">
                <FavoriteBorderIcon />
                <span>Wishlist</span>
              </a>
            </li>
            <li>
              <Link to="/checkout">
                <ShoppingBasketOutlinedIcon />
                <span>Cart</span>
              </Link>
            </li>
            <li>
              <a href="#search">
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

export default withStyles(styles)(MobileNavigation);
