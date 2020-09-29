import React from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/styles";
import useStyles from "./styles/HeaderMenuStyles";
import "fontsource-roboto";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { auth } from "../firebase";

function HeaderMenu() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Toolbar>
        <IconButton
          style={{ color: "#fff" }}
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          className={clsx(open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />

        {/* login & display user data */}
        <div className={classes.HeaderMenu__msg}>
          {/* <AccountCircleOutlinedIcon /> */}
          <AccountCircleIcon />
          <Typography variant="subtitle1" gutterBottom>
            <span>Hello</span>, <span className={classes.HeaderMenu__msg__name}>{user ? user.email : "Guset"}</span>
          </Typography>
        </div>
        <div className={classes.HeaderMenu__login}>
          <Link
            className={classes.HeaderMenu__login__link}
            to={!user && "/login"}
          >
            <div onClick={handleAuthentication}>
              <Typography
                className={classes.HeaderMenu__login__text}
                variant="body1"
                gutterBottom
              >
                {user ? "Sign Out" : "Sign In"} <ExitToAppIcon />
              </Typography>
            </div>
          </Link>
        </div>

        {/* order */}
        <div className={classes.HeaderMenu__orders}>
          <Typography variant="subtitle1" gutterBottom>
            Return &Orders
          </Typography>
        </div>
        <div className={classes.HeaderMenu__prime}>
          <Typography variant="subtitle1" gutterBottom>
            Your Prime
          </Typography>
        </div>

        {/* checkout */}
        <Link className={classes.HeaderMenu__checkout__link} to="/checkout">
          <div className={classes.HeaderMenu__checkout}>
            <LocalMallOutlinedIcon />
            <span className={classes.HeaderMenu__basketCount}>
              {basket?.length}
            </span>
          </div>
        </Link>

        {/* search bar */}
        <Grid className={classes.header__search} item md={7}>
          <input
            placeholder="Saerch for proudct..."
            className={classes.header__searchInput}
            type="text"
          />
          <SearchIcon className={classes.header__searchIcon} />
        </Grid>
      </Drawer>
    </div>
  );
}

export default withStyles(useStyles)(HeaderMenu);
