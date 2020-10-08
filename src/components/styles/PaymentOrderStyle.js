import { makeStyles } from "@material-ui/core/styles";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    margin: "3rem 0 2rem 0",
  },
  wrapper__title: {
    marginBottom: "1.5rem !important",
  },
  PaymentForm__items: {
    display: "flex",
    // flexDirction: 'column'
  },
  wrapper__list: {
    "& li": {
      display: "flex",
      justifyContent: "space-between",
      margin: "0.4rem 0",
      background: "#f7f7f7",
      padding: "1rem",
      borderRadius: 5,
    },
  },
  key: {
    marginRight: "3rem",
  },
  vat: {
    color: "rgb(126, 133, 155)",
    fontSize: "0.9rem",
  },
});

export default useStyles;
