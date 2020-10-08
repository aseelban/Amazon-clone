import { makeStyles } from "@material-ui/core/styles";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    height: "100%",
    marginBottom: "2rem",
  },
  PaymentV2__cardNum: {
    "& input": {
      color: "#fff",
    },
    "& label.Mui-focused": {
      color: "#fff",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#fff",
      },
      "&:hover fieldset": {
        borderColor: "#fff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#fff",
      },
    },
    "&:focus": {
      border: "1px solid #F0C14B",
    },
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem 2rem",
    background: "#F7F7F7",
    borderRadius: 5,
    position: "relative",
    top: "0.9rem",
  },
  wrapper__children: {
    backgroundColor: "#d7d7d77a",
    padding: "1.5rem 0 3rem 0",
    WebkitBoxShadow: "13px 15px 10px -6px rgba(153,153,153,0.6)",
    MozBoxShadow: "13px 15px 10px -6px rgba(153,153,153,0.6)",
    boxShadow: "13px 15px 10px -6px rgba(153,153,153,0.6)",
    borderRadius: 6,
  },
});

export default useStyles;
