import { makeStyles } from "@material-ui/core/styles";
import { createUseStyles } from "react-jss";
import breakpoints from "./breakpoints";

const useStyles = createUseStyles({
  container: {
    marginTop: '2rem !important',

    "& .MuiInput-root": {
      position: "relative",
      border: "1px solid #bdbdbd",
      borderRadius: 5,
    },

    "& .MuiFormControl-root": {
      margin: " 0 0 0.7rem 0.6rem !important",
    },
    "& .rccs__card--unknown > div": {
      background: "linear-gradient(25deg, #285cab, #2e7ef7)",
      boxShadow: "none",
    },
    "& .rccs__card": {
      margin: "2rem 0",
    },
  },
  wrapper__form: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    marginTop: '2rem !important',

    "& .MuiFormControl-root": {
      margin: "0 0 0.7rem 0.6rem !important",
    },
    [breakpoints.down("xs")]: {
      padding: " 0 0.5rem",
    },
  },
  // title: {
  //   borderLeft: "#2d79ecab 2px solid",
  //   padding: "0.5rem",
  //   borderRight: "#2d79ecab 2px solid",
  //   borderRadius: 5,
  //   margin: "5rem !important",
  // },
  submit__button: {
    margin: "1rem 0 !important",
    backgroundColor: '#2b6ac9 !important'
  },
});

export default useStyles;
