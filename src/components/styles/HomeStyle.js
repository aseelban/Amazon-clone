import breakpoints from "./breakpoints";

const styles = {
  container: {
    maxWidth: 1500,
    marginLeft: "auto",
    marginRight: "auto",
    [breakpoints.down("sm")]: {
      marginBottom: "7rem",
    },
  },
  image: {
    width: "100%",
    WebkitMaskImage: "linear-gradient(180deg,#000,transparent)",
    maskImage: "linear-gradient(180deg,#000,transparent)",
    zIndex: "-1",
    marginBottom: "-150px",
    [breakpoints.down("sm")]: {
      marginBottom: "-50px",
    },
  },
  wrapper__discover: {
    marginBottom: "5rem",
  },
  product__title: {
    color: "#6f6f6f",
    padding: "0.3rem 2.6rem",
    background: "#ffffffdb",
    WebkitBoxShadow: "-13px 1px 21px 0px rgb(175 175 175 / 75%)",
    MozBoxShadow: "-13px 1px 21px 0px rgb(175 175 175 / 75%)",
    boxShadow: "-13px 1px 21px 0px rgb(175 175 175 / 75%)",
    [breakpoints.down("sm")]: {
      padding: "0.2rem 1rem",
      fontSize: 15,
    },
  },
};

export default styles;
