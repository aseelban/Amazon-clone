import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/HeaderStyle";
import logo from "./img/amazon-logo.png";
import SearchIcon from "@material-ui/icons/Search";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { auth } from "../firebase";
import { Grid } from "@material-ui/core";
import HeaderMenu from "./HeaderMenu";

const Header = ({ classes }) => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <Grid
      className={classes.header}
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start"
    >
      <Grid item xs={10} md={1}>
        {/* logo */}
        <Link to="/">
          <img className={classes.header__logo} src={logo} />
        </Link>
      </Grid>
      {/* search bar */}
      <Grid className={classes.header__search} item xs={0} md={7}>
        <input className={classes.header__searchInput} type="text" />
        <SearchIcon className={classes.header__searchIcon} />
      </Grid>

      {/* toggle menu "mobile" */}
      <Grid className={classes.header__nav__toggle} item xs={2}>
        <HeaderMenu />
      </Grid>

      {/* nav item */}
      <Grid className={classes.header__nav} item xs={0} md={3}>
        <Link to={!user && "/login"}>
          <div
            onClick={handleAuthentication}
            className={classes.header__option}
          >
            <span className={classes.header__optionLineOne}>
              Hello {user ? user.email : "Guset"}
            </span>
            <span className={classes.header__optionLineTwo}>
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className={classes.header__option}>
          <span className={classes.header__optionLineOne}>Returns</span>
          <span className={classes.header__optionLineTwo}>& Orders</span>
        </div>
        <div className={classes.header__option}>
          <span className={classes.header__optionLineOne}>Your</span>
          <span className={classes.header__optionLineTwo}>Prime</span>
        </div>
        <Link to="/checkout">
          <div className={classes.header__optionBasket}>
            <LocalMallOutlinedIcon />
            <span
              className={
                (classes.header__optionLineTwo, classes.header__basketCount)
              }
            >
              {basket?.length}
            </span>
          </div>
        </Link>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Header);
