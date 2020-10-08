import React from "react";
import useStyles from "./styles/HeaderStyle";
import logo from "./img/amazon-logo.png";
import SearchIcon from "@material-ui/icons/Search";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { auth } from "../firebase";
import { Grid } from "@material-ui/core";
import HeaderMenu from "./HeaderMenu";
import useWindowDimensions from "./hooks/useWindowDimensions";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const { height, width } = useWindowDimensions();
  const classes = useStyles();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  console.log(height + "height");
  console.log(width + "width");

  return (
    <Grid
      className={classes.container}
      container
      direction="row"
      justify="space-between"
      alignItems="center"
    >
      <Grid item xs={10} sm={2} md={1}>
        {/* logo */}
        <Link to="/">
          <img className={classes.logo} src={logo} />
        </Link>
      </Grid>


      {/* nav item */}
      {width <= 768 ? (
        <>
          {/* toggle menu "mobile" */}
          <Grid className={classes.nav__toggle} item xs={2}>
            <HeaderMenu />
          </Grid>
        </>
      ) : (
        <>
              {/* search bar */}
      <Grid className={classes.search} item xs sm={5} md={7}>
      <input
        placeholder="Search for product"
        className={classes.searchInput}
        type="text"
      />
      <SearchIcon className={classes.searchIcon} />
    </Grid>
        <Grid className={classes.nav} item xs sm={5} md={3}>
          <Link to={!user && "/login"}>
            <div onClick={handleAuthentication} className={classes.option}>
              <span className={classes.optionLineOne}>
                Hello {user ? user.email : "Guset"}
              </span>
              <span className={classes.optionLineTwo}>
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <div className={classes.option}>
            <span className={classes.optionLineOne}>Returns</span>
            <span className={classes.optionLineTwo}>& Orders</span>
          </div>
          <div className={classes.option}>
            <span className={classes.optionLineOne}>Your</span>
            <span className={classes.optionLineTwo}>Prime</span>
          </div>
          <Link to="/checkout">
            <div className={classes.optionBasket}>
              <LocalMallOutlinedIcon />
              <span className={(classes.optionLineTwo, classes.basketCount)}>
                {basket?.length}
              </span>
            </div>
          </Link>
        </Grid>
        </>
      )}
    </Grid>
  );
};

export default Header;
