import breakpoints from "./breakpoints";

const styles = {
  CheckoutProduct__wrapper: {
    width: "calc(100% + 8px)",
    boxShadow: '0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)',
    WebkitBoxShadow: '0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)',
    MozBoxShadow: '0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)',
    padding: '1rem',
    margin: '0.3rem 0',
    "&:hover":{
      boxShadow: '0 5px 9px 0 rgba(0,0,0,.1), 0 1px 4px 0 rgba(0,0,0,0.09)',
      MozBoxShadow: '0 5px 9px 0 rgba(0,0,0,.1), 0 1px 4px 0 rgba(0,0,0,0.09)',
      WebkitBoxShadow: '0 5px 9px 0 rgba(0,0,0,.1), 0 1px 4px 0 rgba(0,0,0,0.09)',
    }
  },

  CheckoutProduct__img: {
    width: "180px",
    height: "180px",
    objectFit: "contain",
  },
  CheckoutProduct__img__wrapper: {
    flexBasis: 0,
  },
  CheckoutProduct__info: {
    [breakpoints.down("sm")]: {
      marginLeft: "2rem",
    },
  },
  CheckoutProduct__remove__button: {
    backgroundColor: "#f2c85f",
    margin: "0.6rem 0",
    fontSize: 12,
    "&:hover": {
      backgroundColor: "#ffdb80",
    },
  },
  CheckoutProduct__rating: {
    display: "flex",
  },
  CheckoutProduct__ratingIcon: {
    color: "#f3af05",
  },
};

export default styles;
