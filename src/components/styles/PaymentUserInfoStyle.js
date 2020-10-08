import { makeStyles } from "@material-ui/core/styles";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    margin: "2rem 0",
    "& input": {
      display: "flex",
      margin: "0.2rem 0",
    },
    "& .MuiFormControl-root": {
      margin: "0.2rem 0",
    },
  },
});

export default useStyles;
