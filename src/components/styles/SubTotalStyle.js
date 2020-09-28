import breakpoints from "./breakpoints";

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
  },

  chekout__right__wrapper: {
    background: "#d7d7d763",
    padding: "2.59rem 1rem",

    [breakpoints.down("sm")]: {
      padding: "1.3rem 0.9rem",
    },
  },
  checkout__right__buttom: {
    backgroundColor: "#F2C85F",
  },
  subtotal__items: {
    display: "inline-block",
    marginRight: "5px",
    fontSize: 16,
  },
  subtotal__price: {
    fontWeight: "600",
    fontSize: 16,
  },
};

export default styles;
