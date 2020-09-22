import breakpoints from "./breakpoints";

const styles = {
  checkout: {
    margin: "1rem 2rem",
  },
  checkout__wrapper__ad__subtotal: {
    [breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  paper: {
    textAlign: "center",
    whiteSpace: "nowrap",
  },
  checkout__list: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginLeft: "2rem",
  },
  checkout__list__product: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginLeft: "2rem",

    [breakpoints.down("sm")]: {
      marginLeft: "0",
      justifyContent: "center",
      padding: "0px 1rem",
    },
  },
  chekout__left: {
    // backgroundColor: "#fff",
  },
  checkout__left__title: {
    margin: "1rem 0",
    borderBottom: "1px solid #d7d7d7",
    padding: "1rem 0.2rem",
  },
  checkout__img_ad: {
    width: "100%",
    borderRadius: 5,
    height: "10.79rem",
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    MozBoxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    WebkitBoxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
  },
};

export default styles;
