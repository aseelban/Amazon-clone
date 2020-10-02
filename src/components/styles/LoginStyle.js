const styles = {
  Login__wrapper: {
    overflow: "hidden",
  },
  Login__image__wrapper: {
    display: "flex",
    justifyContent: "center",
  },
  Login__logo: {
    width: 200,
    objectFit: "contain",
  },
  Login__form__wrapper: {
    width: 350,
    border: "1px solid #d7d7d7",
    display: "flex",
    padding: 5,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    margin: "0 auto",
    borderRadius: 5,
    marginTop: "-1.5rem",
  },
  Login__form__title: {
    margin: "0.5rem 0",
  },
  Login__email__form: {
    margin: "0.5rem",
    color: '#F0C14B',
    '& label.Mui-focused': {
      color: '#000',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#adacac',
      },
      '&:hover fieldset': {
        borderColor: '#c7c7c7',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#959797',
      },
    },
    "&:focus":{
      
      border: '1px solid #F0C14B',
    }
  },
  Login__password__form: {
    margin: "0.5rem",
    "&:focus":{
      
      color: '#F0C14B',
    },
    '& label.Mui-focused': {
      color: '#000',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#adacac',
      },
      '&:hover fieldset': {
        borderColor: '#c7c7c7',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#959797',
      },
    },
  },
  Login__submit__form: {
    margin: "0.5rem",
    backgroundColor: "#F0C14B",
    "&:hover": {
      backgroundColor: "#ecd089",
    },
  },
  Login__legalText: {
    padding: "0.5rem",
    textAlign: "start",
    fontSize: 12,
    lineHeight: 1.5,
    margin: "0 0.7rem",
  },
  Login__singup__wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  Login__signup__button: {
    display: "flex",
    margin: "0.9rem auto",
  },
  Login__singup__text: {
    borderBottom: '1px solid #d7d7d7',
    width: 250,
    textAlign: 'center',
    marginTop: '1rem',
    padding: '0.5rem 0',
  },
  Login__error__msg: {
    padding: "0.5rem 0.5rem",
    "& .MuiAlert-action":{
      alignItems: 'flex-start'
    },
    "& .MuiAlert-standardError":{
      backgroundColor: "#fbebeb"
    },
  }
};

export default styles;
