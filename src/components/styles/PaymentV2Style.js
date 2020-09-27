const styles = {
  Payment__wrapper: {
    // backgroundColor: 'red'
    height: "100%",
    // padding: '20rem',
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
  Payment__title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem 2rem",
    background: "#e1e3e3",
    borderRadius: 5,
    position: "relative",
    top: "0.9rem",
  },
  Payment__wrapper__input: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '2rem 0',
  },
  Payment__input: {
    display: "flex",
  },
  Payment__wrapper__input__PaymentForm: {
    backgroundColor: "#d7d7d77a",
    WebkitBoxShadow: "13px 15px 10px -6px rgba(153,153,153,0.6)",
    MozBoxShadow: "13px 15px 10px -6px rgba(153,153,153,0.6)",
    boxShadow: "13px 15px 10px -6px rgba(153,153,153,0.6)",

  },

};

export default styles;
