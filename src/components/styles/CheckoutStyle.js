const styles = {
  checkout: {
    paddingTop: "2rem",
    background: "#fff",
    overflow: "hidden",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
  },
  paper: {
    textAlign: "center",
    whiteSpace: "nowrap",
  },
  chekout__left: {
    backgroundColor: "#fff",
  },
  checkout__left__title: {
    margin: "1rem 0",
    borderBottom: "1px solid #d7d7d7",
    padding: "1rem 0.2rem",
  },
  checkout__img_ad: {
    width: "100%",
  },
  Checkout__product_img: {
    width: "100%",
  },
  Checkout__remove__button: {
    backgroundColor: "#f2c85f",
    margin: "0.6rem 0",
    fontSize: 12,
    "&:hover": {
      backgroundColor: "#ffdb80",
    },
  },
  checkout__rating: {
    display: 'flex'
  }
};

export default styles;
