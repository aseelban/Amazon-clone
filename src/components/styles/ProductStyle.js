const styles = {
  product__card: {
    width: "auto",
    position: "relative",
    boxShadow: "0 2px 7px #dfdfdf",
    margin: 5,
    background: "#fafafa",
    height: "100%",
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
    /* padding: 25px; */
    background: "transparent",
  },
  product__tumb__img: {
    maxWidth: "100%",
    maxHeight: "100%",
  },

  product__details: {
    padding: "30px",
  },

  product__details__link: {
    fontWeight: 500,
    display: "block",
    marginBottom: 18,
    textTransform: "uppercase",
    color: "#363636",
    textDecoration: "none",
    transition: "03s",
    "&:hover": {
      color: "#fbb72c",
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
    "& small": {
      fontSize: "80%",
      fontWeight: 400,
      textDecoration: "line-through",
      display: "inline-block",
      marginRight: 5,
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
};

export default styles;
