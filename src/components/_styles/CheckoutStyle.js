import breakpoints from "./breakpoints";

const styles = {
  checkout: {
    margin: "1rem 2rem",
    [breakpoints.down("sm")]: {
      marginBottom: "7rem",
    },
  },
  wrapper__ad__subtotal: {
    [breakpoints.down("sm")]: {
      justifyContent: "center",
    },
    [breakpoints.up("sm")]: {
      marginLeft: '1.5rem',
    },
  },
  paper: {
    textAlign: "center",
    whiteSpace: "nowrap",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginLeft: "2rem",
  },
  list__product: {
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
  left__title: {
    margin: "1rem 0",
    borderBottom: "1px solid #d7d7d7",
    padding: "1rem 0.2rem",
    [breakpoints.down("sm")]: {
      fontSize: 12,
    },
  },
  img_ad: {
    width: "100%",
    borderRadius: 5,
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    MozBoxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    WebkitBoxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
  },
  height: '100%',
  objectFit: 'contain',
  title: {

    [breakpoints.down("sm")]: {
      fontSize: '1.3rem',
   
    },
  },
  emptyText: {
    marginLeft: '2.1rem',
    fontSize: '1.1rem',
    [breakpoints.down("sm")]: {
      fontSize: '1rem',
      marginLeft: '2.2rem',
   
    },
  }
};

export default styles;
