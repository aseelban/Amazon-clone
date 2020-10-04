import { makeStyles, useTheme } from "@material-ui/core/styles";
const drawerWidth = 240;
const mainColors = { header_bg_color: "#131921", icon_bg_color: "#f3a847" };

const useStyles = makeStyles((theme) => ({
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
  search: {
    display: "flex",
    flex: "1 1",
    marginTop: "1rem",
  },

  searchInput: {
    height: 6,
    padding: "12.5px",
    border: "none",
    width: "100%",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: "#d7d7d75e",
  },

  searchIcon: {
    padding: 4,
    height: "25px !important",
    backgroundColor: mainColors.icon_bg_color,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  msg: {
    display: "flex",
    padding: "1rem 0.5rem",
    background: "#232F3E",
    margin: 0,
    marginBottom: "1rem",
    color: "#fff",

    "& span": {
      fontFamily: "sans-serif",
      fontSize: 17,
    },
    "& svg": {
      margin: "0 8px 0 5px",
    },
  },
  msg__name: {
    fontWeight: 600,
    fontSize: 16,
  },
  login: {
    margin: "0 0.5rem",
  },
  login__link: {
    textDecoration: "none",
    color: "#e08929",
  },
  login__text: {
    display: "flex",
    justifyContent: "flex-start",
    alignContent: "center",
    alignItems: "center",
    "& svg": {
      marginLeft: "0.2rem !important",
    },
  },

  orders: {
    margin: "0 0.5rem",
  },
  prime: {
    margin: "0 0.5rem",
  },

  checkout: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    color: "#000",
  },
  checkout__link: {
    textDecoration: "none",
    background: "#f0f0f0",
    padding: "1rem",
    fontSize: "1.3rem",
  },
}));

export default useStyles;
