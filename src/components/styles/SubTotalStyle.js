import { makeStyles } from "@material-ui/core/styles";
import { createUseStyles } from "react-jss";
import breakpoints from "./breakpoints";

const useStyles = createUseStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
  },

  chekout__right__wrapper: {
    background: "#d7d7d763 !important",
    padding: "2.59rem 1rem !important",

    [breakpoints.down("sm")]: {
      padding: "1.3rem 0.9rem !important",
    },
    "& .MuiFormControlLabel-label": {
      fontSize: 13,
    },
  },
  checkout__right__buttom: {
    backgroundColor: "#F2C85F !important",
    [breakpoints.down("sm")]: {
      padding: "0.4rem !important",
      fontSize: '12px !important',
    },
  },
  items: {
    display: "inline-block !important",
    marginRight: "5px !important",
    fontSize: '19px !important',
  },
  price: {
    fontWeight: "600",
    fontSize: 16,
  },
});

export default useStyles;
