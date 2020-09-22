import zIndex from "@material-ui/core/styles/zIndex";
import breakpoints from "./breakpoints";


const styles = {
  home: {
    maxWidth: 1500,
    marginLeft: "auto",
    marginRight: "auto",
  },
  home__image: {
    width: "100%",
    WebkitMaskImage: "linear-gradient(180deg,#000,transparent)",
    maskImage: "linear-gradient(180deg,#000,transparent)",
    zIndex: "-1",
    marginBottom: "-150px",
    [breakpoints.down("sm")]: {
        marginBottom: '-50px'
      },
  },
  home__wrapper__discover:{
    // padding:' 1rem 0',
    marginBottom: '5rem'
  },
  Home__product__title: {
    color: "#6f6f6f",
    padding: "0.3rem 2.6rem",
    background: "#ffffffdb",
    WebkitBoxShadow: "-13px 1px 21px 0px rgb(175 175 175 / 75%)",
    MozBoxShadow: "-13px 1px 21px 0px rgb(175 175 175 / 75%)",
    boxShadow: "-13px 1px 21px 0px rgb(175 175 175 / 75%)"
  },
};

export default styles;
