import React from "react";
import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./styles/PaymentForm.css";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import RecentActorsOutlinedIcon from "@material-ui/icons/RecentActorsOutlined";
import DateRangeIcon from "@material-ui/icons/DateRange";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import SendIcon from "@material-ui/icons/Send";

export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <Grid item md="12">
        <div id="PaymentForm">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs="12">
              <Typography
                variant="h5"
                className="PaymentForm__title"
                gutterBottom
                display="inline"
              >
                PAYMENT METHOD
              </Typography>
            </Grid>
            <Grid item xs="12">
              <Cards
                cvc={this.state.cvc}
                expiry={this.state.expiry}
                focused={this.state.focus}
                name={this.state.name}
                number={this.state.number}
                placeholders={{ name: "CARD NAME" }}
                issuer="mastercard"
              />
            </Grid>
            <form class="PaymentForm__wrapper__form">
              <Grid item xs="0" sm="3" md="3">
                <TextField
                  type="tel"
                  name="name"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                  id="outlined-size-small"
                  variant="standard"
                  size="small"
                  label="Card Name"
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
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                  id="outlined-size-small"
                  variant="standard"
                  size="small"
                  label="Card Number"
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
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                  id="outlined-size-small"
                  variant="standard"
                  size="small"
                  label="EXPIRY"
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
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                  id="outlined-size-small"
                  variant="standard"
                  size="small"
                  label="CVC"
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
              className="PaymentForm__submit__button"
            >
              BUY
            </Button>
          </Grid>
        </div>
      </Grid>
    );
  }
}
