import { makeStyles } from "@material-ui/core/styles";
import { createUseStyles } from "react-jss";
import breakpoints from "./breakpoints";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "3rem",
    fontFamily: 'Helvetica Neue", Arial, sans-serif',
    backgroundColor: "#f7f7f7",
    marginBottom: 50,
    color: "#383737",

    "& h1": {
      width: "auto",
      display: "inline-block",
      fontSize: "7em",
      lineHeight: "100%",
      letterSpacing: "0.2em",
      textShadow: "-7px 7px 0 #fbbf70, -12px 12px 0 rgb(245 225 200)",
      WebkitTransition: "all 0.2s ease",
      transition: "all 0.2s ease",
      "& h1:hover": {
        textShadow:
          "4px -1px 0 rgba(240, 85, 85, 0.6), -5px 2px 0 rgba(72, 104, 244, 0.6), 6px 3px 0 rgba(255, 219, 89, 0.6)",
        WebkitTransition: "all 0.2s ease",
        transition: "all 0.2s ease",
      },

      [breakpoints.down("sm")]: {
        fontSize: "5em",
      },
    },
    "& h3": {
      fontSize: "1.6em",
      margin: "1rem 0 2.5rem 0",
      textAlign: "center",

      [breakpoints.down("sm")]: {
        fontSize: "1em",
      },
    },
    "& a": {
      padding: "15px 15px",
      color: "white",
      fontWeight: "bold",
      fontSize: "0.9em",
      textAlign: "center",
      textDecoration: "none",
      textTransform: "uppercase",
      letterSpacing: "0.09em",
      backgroundColor: "rgb(42 50 62)",
      boxShadow:
        "-7px 7px 0 rgba(72, 104, 244, 0.7), -12px 12px 0 rgb(251 191 112)",
      WebkitTransition: "all 0.2s ease",
      transition: "all 0.2s ease",
      "& a:hover": {
        boxShadow: "-7px 7px 0 #abadaf, -12px 12px 0 rgb(243 168 71)",
        WebkitTransition: "all 0.2s ease",
        transition: "all 0.2s ease",
      },

      [breakpoints.down("sm")]: {
        fontSize: "0.8em",
      },
    },
  },
});

export default useStyles;
