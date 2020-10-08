import breakpoints from "./breakpoints";

const styles = {
  ProductPage__container: {
    backgroundColor: "whitesmoke",
    height: "100%",
    margin: "auto",
    display: "flex",
    color: "#444444",
    width: "100%",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "auto",
    padding: "2.5rem 0.5rem 3.5rem 0.5rem",
    justifyContent: "flex-start",
    fontFamily: 'Oswald", sans-serif',
    "& h5": {
      textTransform: "uppercase",
      margin: 0,
      fontSize: 14,
    },
    "& ul": {
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    "& a": {
      textDecoration: "none",
      color: "#bbb",
    },
    "& .snakerbar__wrapper": {
      "& .MuiPaper-root": {
        backgroundColor: "#537290e3 !important",
      },
    },
    [breakpoints.up("customX")]: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      margin: "0 0 0 2.5rem !important",
      justifyContent: "flex-start",
    },
    [breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  ProductPage__product__image: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "linear-gradient(to bottom, #f3f0da 0%, #f3f3f3 100%)",
    borderRadius: "20px 20px 0 0",
    width: "100%",
    margin: 0,
    [breakpoints.up("customX")]: {
      borderRadius: "20px 0 0 20px",
      maxWidth: 330,
    },
  },
  ProductPage__product__pic: {
    maxWidth: 180,
    position: "relative",
    left: 0,
    margin: "40px 0",
    filter: "drop-shadow(-6px 40px 23px rgba(0, 0, 0, 0.5))",
    objectFit: "contain",
    [breakpoints.up("customX")]: {
      maxWidth: 250,
    },
  },
  ProductPage__product__details: {
    padding: 40,
    backgroundColor: "white",
    borderRadius: "0 0 20px 20px",
    "& header": {
      marginBottom: 50,
      position: "relative",
    },
    "& article": {
      marginBottom: 50,
      position: "relative",
      "& p": {
        margin: 0,
      },
      "& p": {
        color: "#bbb",
        margin: "0.5em 0",
        fontSize: 14,
        lineHeight: 1.6,
      },
    },

    [breakpoints.up("customX")]: {
      width: "100%",
      borderRadius: "0 20px 20px 0",
      width: "55%",
    },
  },
  ProductPage__colorCat: {
    textTransform: "uppercase",
    fontStyle: "italic",
    color: "#bbb",
    fontWeight: 700,
    fontSize: 14,
  },
  ProductPage__newPrice: {
    fontWeight: 500,
    marginTop: 5,
    fontFamily: "system-ui",
    fontSize: "1.1rem",
  },
  ProductPage__current: {
    color: "#ef8f00",
    marginLeft: 6,
  },
  ProductPage__oldPrice: {
    textDecoration: "line-through",
    color: "#757575",
  },
  ProductPage__controls: {
    margin: "3em 0",
    "& div": {
      flex: 1,
    },
    [breakpoints.up("custom")]: {
      display: "flex",
    },
  },
  ProductPage__rate: {
    position: "static",
    marginTop: 10,
    [breakpoints.up("custom")]: {
      position: "absolute",
      top: 12,
      right: 10,
      marginTop: 0,
    },
  },
  ProductPage__footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "2.5rem",
    "& button": {
      display: "flex",
      border: 0,
      padding: "10px 15px",
      alignItems: "center",
      borderRadius: 7,
      cursor: "pointer",
      background: "linear-gradient(to bottom, #ffd173 0%, #f5b42e 100%)",
      boxShadow: "3px 4px 7px 0px rgb(171 146 122 / 36%)",
      transition: "200ms",
      "&:hover": {
        background: "linear-gradient(to bottom, #fdc659 0%, #f3a811 100%)",
      },
    },
    "& svg": {
      color: "#fff",
    },
    "& span": {
      fontSize: 16,
      textTransform: "uppercase",
      fontWeight: 700,
      marginLeft: 10,
      color: "white",
    },
  },
  share: {
    "& svg": {
      color: "#909090",
    },
  },
};
export default styles;
