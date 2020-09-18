import breakpoints from "./breakpoints";
const mainColors = { header_bg_color: "#131921", icon_bg_color: "#f3a847" };

const styles = {
  header: {
    display: "flex",
    backgroundColor: mainColors.header_bg_color,
    alignItems: "center",
    height: 60,
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  header__logo: {
    width: 100,
    objectFit: "contain",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 18,
  },

  header__search: {
    display: "flex",
    flex: "1 1",
    [breakpoints.down("md")]: {
      display: "none",
    },
  },

  header__searchInput: {
    height: 12,
    padding: 10,
    border: "none",
    width: "100%",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },

  header__searchIcon: {
    padding: 5,
    height: "22px !important",
    backgroundColor: mainColors.icon_bg_color,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },

  header__nav: {
    display: "flex",
    justifyContent: "space-evenly",

    [breakpoints.down("md")]: {
      display: "none",
    },
  },
  header__nav__toggle: {
    display: "none",

    [breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "space-between",
      color: "#fff",
    },
  },

  header__option: {
    display: "flex",
    flexDirection: "column",
    color: "#fff",
    marginLeft: 10,
    marginRight: 14,
  },

  header__optionLineOne: {
    fontSize: 11,
  },

  header__optionLineTwo: {
    fontSize: 13,
    fontWeight: 700,
  },

  header__optionBasket: {
    display: "flex",
    alignItems: "center",
    color: "#fff",
    padding: "0.2rem",
    marginRight: 10,
  },
  header__optionLineTwo: {
    fontSize: 13,
    fontWeight: 700,
  },
  header__basketCount: {
    margin: "0 10px",
    fontSize: 15,
  },
};

export default styles;
