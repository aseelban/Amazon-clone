import breakpoints from "./breakpoints";

const styles = {
  CheckoutProduct__wrapper: {
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
    "& p": {
      [breakpoints.down("sm")]: {
        marginBottom: "0.4rem",
      },
    },
    [breakpoints.down("sm")]: {
      padding: "2rem 0",
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
  CheckoutProduct__remove__button: {
    backgroundColor: "#f2c85f",
    fontSize: 12,
    "&:hover": {
      backgroundColor: "#ffdb80",
    },
  },
  CheckoutProduct__rating: {
    [breakpoints.down("sm")]: {
      marginBottom: '0.2rem',
    },
  },
  CheckoutProduct__ratingIcon: {
    color: "#f3af05",
  },
};

export default styles;
