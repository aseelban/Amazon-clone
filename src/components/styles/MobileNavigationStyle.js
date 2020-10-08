import { makeStyles } from "@material-ui/core/styles";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    marginTop: "5rem",
    bottom: 0,
    zIndex: 100,
    position: "fixed",
    width: "100%",
    background: "#f3f3f3",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid #dadada",
  },
  phone: {
    border: "2px solid #eee",
    position: "relative",
    height: 0,
    overflow: "hidden",
    width: "100%",
    height: "auto",
    boxShadow: "0 40px 80px rgba(0,0,0,0.15)",
    padding: "0.4rem",
  },
  nav__icons: {
    "& ul": {
      listStyleType: "none",
      display: "-webkit-box",
      display: "flex",
      flexWrap: "nowrap",
      WebkitBoxPack: "justify",
      justifyContent: "space-between",
      padding: 0,
      margin: 0,
    },
    "& a": {
      fontFamily: "sans-serif",
      fontSize: 11,
      letterSpacing: 1,
      textDecoration: "none",
      color: "#000",
      lineHeight: 1,
      verticalAlign: "middle",
      display: "-webkit-box",
      display: "flex",
      WebkitBoxAlign: "center",
      alignItems: "center",
      borderRadius: "3em",
      padding: "0.75em 1.25em",
      WebkitTransition: "0.6s ease-in-out",
      transition: "0.6s ease-in-out",
    },
    "& a:hover": {
      color: "#fff",
      backgroundColor: "#000",
    },
    "& a:is-active": {
      color: "#fff",
      backgroundColor: "#000",
    },
    "& span": {
      display: "inline-block",
      overflow: "hidden",
      maxWidth: 0,
      opacity: 0,
      paddingLeft: "0.5em",
      WebkitTransform: "translate3d(-0.5em, 0, 0)",
      transform: "translate3d(-0.5em, 0, 0)",
      WebkitTransition: "opacity 0.6s, max-width 0.6s, -webkit-transform 0.6s",
      transition: "opacity 0.6s, max-width 0.6s, -webkit-transform 0.6s",
      transition: "opacity 0.6s, max-width 0.6s, transform 0.6s",
      transition:
        "opacity 0.6s, max-width 0.6s, transform 0.6s, -webkit-transform 0.6s",
      WebkitTransitionTimingFunction: "ease-in-out",
      transitionTimingFunction: "ease-in-out",
    },

    "& a:hover span": {
      opacity: 1,
      maxWidth: 70,
      WebkitTransform: "translate3d(0, 0, 0)",
      transform: "translate3d(0, 0, 0)",
    },
    "& a:is-active span": {
      opacity: 1,
      maxWidth: 70,
      WebkitTransform: "translate3d(0, 0, 0)",
      transform: "translate3d(0, 0, 0)",
    },
  },
  mobile:{
    right: '-3px',
    top: '13px',
    border: `2px solid #d7d7d7`,
    padding: '0 4px'
  },
  checkout:{
    position: 'relative',
    "& div":{
      top: '-2px',
      right: 9,
      cursor: 'pointer',
      padding: '1px 4px',
      position: 'absolute',
      background: '#ff9819',
      color: '#fff',
      fontSize: 12,
      borderRadius: '100%',
    }
  }
});

export default useStyles;
