import { makeStyles } from "@material-ui/core/styles";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    overflow: "hidden",
    background:
      "-webkit-linear-gradient(-74deg, rgb(251 251 251), rgb(234 234 234))",
    background: "linear-gradient(-74deg, rgb(251 251 251), rgb(234 234 234))",
    height: "100vh",
  },
  image__wrapper: {
    display: "flex",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    objectFit: "contain",
  },
  form__wrapper: {
    width: 350,
    border: "1px solid #e4e3e3",
    display: "flex",
    padding: "1rem 0",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    margin: "0 auto",
    borderRadius: 5,
    marginTop: "-1.5rem",
    boxShadow:
      "0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)!important",
  },
  form__title: {
    margin: "0.5rem 0",
  },
  email__form: {
    // margin: "0.5rem",
    margin: "1rem 0 0.7rem 0 !IMPORTANT",
    color: "#F0C14B",
    "& label.Mui-focused": {
      color: "#000",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#adacac",
      },
      "&:hover fieldset": {
        borderColor: "#c7c7c7",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#959797",
      },
    },
    "&:focus": {
      border: "1px solid #F0C14B",
    },
  },
  password__form: {
    marginBottom: "0.7rem !IMPORTANT",
    "&:focus": {
      color: "#F0C14B",
    },
    "& label.Mui-focused": {
      color: "#000",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#adacac",
      },
      "&:hover fieldset": {
        borderColor: "#c7c7c7",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#959797",
      },
    },
  },
  submit__form: {
    margin: "0.5rem",
    backgroundColor: "#F0C14B !important",
    "&:hover": {
      backgroundColor: "#ecd089",
    },
  },
  legalText: {
    padding: "0.5rem",
    textAlign: "start",
    fontSize: 12,
    lineHeight: 1.5,
    margin: "0 0.7rem",
  },
  singup__wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1.8rem",
  },
  signup__button: {
    display: "flex",
    marginTop: "0.7rem !important",
    backgroundColor: "#dcdcdc !important",
  },
  singup__text: {
    borderBottom: "1px solid #d7d7d7",
    width: 250,
    textAlign: "center",
    marginTop: "1rem",
    padding: "0.5rem 0",
  },
  error__msg: {
    padding: "0.5rem 0.5rem",
    "& .MuiAlert-action": {
      alignItems: "flex-start",
    },
    "& .MuiAlert-standardError": {
      backgroundColor: "#fbebeb",
    },
  },
});

export default useStyles;
