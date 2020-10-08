import { makeStyles } from "@material-ui/core/styles";
import { createUseStyles } from "react-jss";
import breakpoints from "./breakpoints";

const useStyles = createUseStyles({
  product__card: {
    width: "auto",
    position: "relative",
    boxShadow: "0 2px 7px #dfdfdf",
    margin: 5,
    background: "#fafafa",
    height: "100%",
  },
  Product__route: {
    textDecoration: "none",
  },

  badge: {
    position: "absolute",
    left: 0,
    top: 20,
    textTransform: "uppercase",
    fontSize: 13,
    fontWeight: 700,
    background: "red",
    color: "#fff",
    padding: "3px 10px",
  },

  product__tumb: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    background: "transparent",
  },
  product__tumb__img: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  },

  product__details: {
    padding: "30px",
    [breakpoints.down("sm")]: {
      padding: 12,
    },
  },

  product__details__link: {
    fontFamily: "revert",
    fontWeight: 500,
    display: "block",
    marginBottom: 18,
    textTransform: "uppercase",
    color: "#363636",
    textDecoration: "none",
    transition: "03s",
    textAlign: "start",
    fontSize: "1.1rem",
    "&:hover": {
      color: "#fbb72c",
    },
    [breakpoints.down("sm")]: {
      fontSize: 15,
    },
  },

  product__bottom__details: {
    overflow: "hidden",
    borderTop: "1px solid #eee",
    paddingTop: 20,
    display: "flex",
    justifyContent: "space-between",
  },

  product__price: {
    fontSize: 18,
    color: "#fbb72c",
    fontWeight: 600,
    float: "left",
    width: "50%",
    textAlign: "start",
    "& small": {
      fontSize: "80%",
      fontWeight: 400,
      textDecoration: "line-through",
      display: "inline-block",
      marginRight: 5,
    },
    [breakpoints.down("sm")]: {
      fontSize: 17,
    },
  },

  product__cart: {
    display: "inline-block",
    marginLeft: 5,
    color: "#e1e1e1",
    transition: "0.3s",
    fontSize: 17,
    border: "none",
    backgroundColor: "transparent",
    outline: "none",
    cursor: "pointer",
    "&:hover": {
      color: "#fbb72c",
    },
  },
  product__fav: {
    display: "inline-block",
    marginLeft: 5,
    color: "#e1e1e1",
    transition: "0.3s",
    fontSize: 17,
    border: "none",
    backgroundColor: "transparent",
    outline: "none",
    cursor: "pointer",
    "&:hover": {
      color: "#f00303",
    },
  },
  Product__oldPrice: {
    fontFamily: "system-ui",
    fontSize: "1rem",
    color: "#757575",
    marginRight: "0.3rem",
    textDecoration: "line-through",
  },
  Product__newPrice: {
    fontFamily: "system-ui",
    fontSize: "1rem",
    color: "#ef8f00",
  },
});

export default useStyles;
