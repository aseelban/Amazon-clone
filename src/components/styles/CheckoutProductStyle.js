import breakpoints from "./breakpoints";

const styles = {
  CheckoutProduct__wrapper: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    textAlign: 'center',
    boxShadow: "0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)",
    WebkitBoxShadow:
      "0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)",
    MozBoxShadow:
      "0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)",
    padding: "2rem 2rem 2rem 0",
    margin: "0.6rem 0",
    "&:hover": {
      boxShadow: "0 5px 9px 0 rgba(0,0,0,.1), 0 1px 4px 0 rgba(0,0,0,0.09)",
      MozBoxShadow: "0 5px 9px 0 rgba(0,0,0,.1), 0 1px 4px 0 rgba(0,0,0,0.09)",
      WebkitBoxShadow:
        "0 5px 9px 0 rgba(0,0,0,.1), 0 1px 4px 0 rgba(0,0,0,0.09)",
    },

    "& h4": {
      [breakpoints.down("sm")]: {
        margin: "0.5rem 0",
      },
    },

    [breakpoints.down("sm")]: {
      padding: "2rem 0",
    },
  },

  CheckoutProduct__price: {
    color: "#ef8f00",
    fontWeight: 500,
    marginTop: 5,
    fontFamily: "system-ui",
    fontSize: "1.1rem",
    [breakpoints.down("sm")]: {
      marginBottom: "0.4rem",
    },
  },
  CheckoutProduct__img: {
    width: "180px",
    height: "180px",
    objectFit: "contain",
  },
  CheckoutProduct__img__wrapper: {
    [breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
    },
    // flexBasis: 0,
  },
  CheckoutProduct__info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    [breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "0.5rem",
    },
  },
  CheckoutProduct__rating: {
    [breakpoints.down("sm")]: {
      marginBottom: "0.2rem",
    },
  },
  CheckoutProduct__ratingIcon: {
    color: "#f3af05",
  },
  CheckoutProduct__route: {
    textDecoration: "none",
    color: "#000",
  },
  CheckoutProduct__wrapper__remove: {
    position: 'absolute',
    top: 10,
    right: 0,
    padding: '1px 4px',
    background: '#eaeaea',
    borderRadius: '5px 0px 0px 5px',
    color: '#777672',
    cursor: 'pointer',
    "& svg":{
      fontSize: '1.2rem',
    }
  }
};

export default styles;
