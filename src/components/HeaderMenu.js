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
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
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
        <div className={classes.msg}>
          {/* <AccountCircleOutlinedIcon /> */}
          <AccountCircleIcon />
          <Typography variant="subtitle1" gutterBottom>
            <span>Hello</span>,{" "}
            <span className={classes.msg__name}>
              {user ? user.email : "Guset"}
            </span>
          </Typography>
        </div>
        <div className={classes.login}>
          <Link className={classes.login__link} to={!user && "/login"}>
            <div onClick={handleAuthentication}>
              <Typography
                className={classes.login__text}
                variant="body1"
                gutterBottom
              >
                {user ? "Sign Out" : "Sign In"} <ExitToAppIcon />
              </Typography>
            </div>
          </Link>
        </div>

        {/* order */}
        <div className={classes.orders}>
          <Typography variant="subtitle1" gutterBottom>
            Return &Orders
          </Typography>
        </div>
        <div className={classes.prime}>
          <Typography variant="subtitle1" gutterBottom>
            Your Prime
          </Typography>
        </div>

        {/* checkout */}
        <Link className={classes.checkout__link} to="/checkout">
          <div className={classes.checkout}>
            <LocalMallOutlinedIcon />
            <span className={classes.basketCount}>{basket?.length}</span>
          </div>
        </Link>
      </Drawer>
    </div>
  );
}

export default HeaderMenu;
