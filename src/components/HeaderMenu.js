import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/styles";
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
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { auth } from "../firebase";

const drawerWidth = 240;
const mainColors = { header_bg_color: "#131921", icon_bg_color: "#f3a847" };

const useStyles = makeStyles((theme) => ({
  // root: {
  //   display: "flex",
  //   justifyContent: "space-around",
  //   flex: "1 0 auto",
  // },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  header__search: {
    display: "flex",
    flex: "1 1",
    marginTop: "1rem",
  },

  header__searchInput: {
    height: 12,
    padding: 10,
    border: "none",
    width: "100%",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: "#d7d7d75e",
  },

  header__searchIcon: {
    padding: 5,
    height: "22px !important",
    backgroundColor: mainColors.icon_bg_color,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  // nav
  Header_menu__login: {
    margin: "0 0.5rem",
  },
  Header_menu__login__link: {
    textDecoration: "none",
    color: "#e08929",
  },
  Header_menu__login__text: {
    display: "flex",
    justifyContent: "flex-start",
    alignContent: "center",
    alignItems: "center",
    "& svg": {
      marginLeft: "0.2rem !important",
    },
  },

  Header_menu__orders: {
    margin: "0 0.5rem",
  },
  Header_menu__prime: {
    margin: "0 0.5rem",
  },

  header_menu__checkout: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    color: "#000",
  },
  header_menu__checkout__link: {
    textDecoration: "none",
    background: "#f0f0f0",
    padding: "1rem",
    fontSize: "1.3rem",
  },
}));

function Header_menu() {
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
        <div className={classes.Header_menu__login}>
          <Typography variant="subtitle1" gutterBottom>
            Hello {user ? user.email : "Guset"}
          </Typography>
          <Link
            className={classes.Header_menu__login__link}
            to={!user && "/login"}
          >
            <div onClick={handleAuthentication}>
              <Typography
                className={classes.Header_menu__login__text}
                variant="body1"
                gutterBottom
              >
                {user ? "Sign Out" : "Sign In"} <ExitToAppIcon />
              </Typography>
            </div>
          </Link>
        </div>

        {/* order */}
        <div className={classes.Header_menu__orders}>
          <Typography variant="subtitle1" gutterBottom>
            Return &Orders
          </Typography>
        </div>
        <div className={classes.Header_menu__prime}>
          <Typography variant="subtitle1" gutterBottom>
            Your Prime
          </Typography>
        </div>

        {/* checkout */}
        <Link className={classes.header_menu__checkout__link} to="/checkout">
          <div className={classes.header_menu__checkout}>
            <LocalMallOutlinedIcon />
            <span className={classes.header_menu__basketCount}>
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

export default Header_menu;
