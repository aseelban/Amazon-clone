import React, { useState } from "react";
import useStyles from "./styles/PaymentFormStyle";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import RecentActorsOutlinedIcon from "@material-ui/icons/RecentActorsOutlined";
import DateRangeIcon from "@material-ui/icons/DateRange";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import SendIcon from "@material-ui/icons/Send";

function PaymentForm() {
  const [state, setState] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });
  const classes = useStyles();


  const handleInputFocus = (e) => {
    setState((prevState) => ({
      ...prevState,
      focus: e.target.name,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Grid item md="12" className={classes.container}>
      <div id="PaymentForm">
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs="12">
            <Typography
              variant="h6"
              className={classes.title}
              gutterBottom
              display="inline"
            >
              PAYMENT METHOD
            </Typography>
          </Grid>
          <Grid item xs="12">
            <Cards
              cvc={state.cvc}
              expiry={state.expiry}
              focused={state.focus}
              name={state.name}
              number={state.number}
              placeholders={{ name: "CARD NAME" }}
              issuer="mastercard"
            />
          </Grid>
          <form className={classes.wrapper__form}>
            <Grid item xs="0" sm="3" md="3">
              <TextField
                type="text"
                name="name"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                id="outlined-size-small"
                variant="standard"
                size="small"
                label="Card Name"
                inputProps={{ maxLength: 26 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                type="tel"
                name="number"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                id="outlined-size-small"
                variant="standard"
                size="small"
                label="Card Number"
                inputProps={{ maxLength: 16 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <RecentActorsOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs="0" sm="3" md="3">
              <TextField
                type="tel"
                name="expiry"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                id="outlined-size-small"
                variant="standard"
                size="small"
                label="EXPIRY"
                inputProps={{ maxLength: 4 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DateRangeIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                type="tel"
                name="cvc"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                id="outlined-size-small"
                variant="standard"
                size="small"
                label="CVC"
                inputProps={{ maxLength: 3 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CreditCardIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </form>
          <Button
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            className={classes.submit__button}
          >
            BUY
          </Button>
        </Grid>
      </div>
    </Grid>
  );
}

export default PaymentForm;
