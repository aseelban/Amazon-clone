const styles = {
  container: {
    overflow: "hidden",
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
    border: "1px solid #d7d7d7",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    margin: "0 auto",
    borderRadius: 5,
    marginTop: "-1.5rem",
    padding: "1rem 0 1.2rem 0",
  },
  form__title: {
    margin: "0.5rem 0",
  },
  email__form: {
    margin: "0.5rem",
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
    margin: "0.5rem",
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
    backgroundColor: "#F0C14B",
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
  error__msg: {
    padding: "0.5rem 0.5rem",
    "& .MuiAlert-action": {
      alignItems: "flex-start",
    },
    "& .MuiAlert-standardError": {
      backgroundColor: "#fbebeb",
    },
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
};

export default styles;
