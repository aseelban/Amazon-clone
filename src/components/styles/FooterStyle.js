import breakpoints from "./breakpoints";

const styles = {
  footer__wrapper: {
    backgroundColor: "#232F3E",
    fontFamily: "Lato, sans-serif",
    padding: "50px 0 7px 0",
    marginTop: "7rem",

    "& h1": {
      fontWeight: 900,
      color: "white",
      fontSize: 24,
      letterSpacing: 2,
      margin: 0,
      paddingBottom: 10,
    },
    "& h2": {
      fontWeight: 300,
      lineHeight: 1.8,
      fontSize: 13,
      color: "#d1d1d1",
      letterSpacing: "0.03em",
      padding: "15px 0 0 0",
    },
    "& h3": {
      fontWeight: 700,
      fontSize: 15,
      color: "white",
      margin: 0,
      paddingBottom: 9,
      letterSpacing: "0.03em",
    },
    "& ul": {
      lineHeight: 1.8,
      listStyleType: "none",
      padding: 0,
    },
    "& li": {
      fontWeight: 300,
      fontSize: 13,
      color: "#d1d1d1",
      letterSpacing: "0.03em",
    },
    "& p": {
      fontWeight: 300,
      fontSize: 13,
      padding: 0,
      lineHeight: 1.8,
      letterSpacing: "0.03em",
    },
    "& a": {
      textDecoration: "none",
      color: "#d1d1d1",
    },
    "& a:hover": {
      textDecoration: "none",
      color: "#d1d1d1",
    },
    [breakpoints.down("xg")]: {
      padding: "50px 0 70px 0 !important",
    },
    [breakpoints.down("sm")]: {
      display: "none",
    },
  },
  footer__inner: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 1170,
    position: "relative",

    [breakpoints.down("xg")]: {
      borderBottom: "1px solid #333",
      paddingBottom: 490,
      marginBottom: 50,
    },
    "& hover": {
      [breakpoints.down("xg")]: {
        top: 730,
      },
    },
  },
  footer__item: {
    float: "left",
    margin: "0 7.2% 0 0",

    "&: nth-of-type(4)": {
      display: "none",
    },
    "&: nth-of-type(7)": {
      float: "right",
      marginRight: 0,
    },

    "&: nth-of-type(1)": {
      [breakpoints.down("xg")]: {
        borderBottom: "1px solid #333",
        paddingBottom: 32,
        float: "none",
        width: "100%",
      },
    },
    "&: nth-of-type(2)": {
      [breakpoints.down("xg")]: {
        clear: "both",
      },
    },
    "&: nth-of-type(4)": {
      [breakpoints.down("xg")]: {
        clear: "both",
        display: "block",
      },
    },
    "&: nth-of-type(6)": {
      [breakpoints.down("xg")]: {
        clear: "both",
      },
    },
    "&: nth-of-type(7)": {
      [breakpoints.down("xg")]: {
        clear: "both",
        float: "left",
        margin: "20px 0 0 -13px ",
      },
    },

    [breakpoints.down("xg")]: {
      margin: "0 0 42px 0",
      width: "50%",
    },
  },
  footer__color: {
    color: "white",
    fontWeight: 400,
  },
  footer__button: {
    color: "white",
    position: "relative",
    fontWeight: 400,
    fontSize: 16,
    transition: "1s",
    transitionDelay: ".2s",
    padding: 14,

  },
  footer__credit: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2rem',
    borderTop: '1px solid #69696991',
    padding: '1rem 0',
    color: '#cecece',
    fontSize: 13,

    "& svg":{
      fontSize: 14,
      color: '#e80e0e',
    }
  },
  footer__MobileNavigation:{
    [breakpoints.up("sm")]: {
      display: "none",
    },
  }
};

export default styles;
