import React,{Fragment} from "react";
import { withStyles } from "@material-ui/styles";
import "./styles/PaymentV2.css";
import styles from "./styles/PaymentV2Style";
import visa_icon from "./img/visa.png";
import {
  FormControl,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@material-ui/core";
import StorefrontIcon from "@material-ui/icons/Storefront";
import PaymentForm from "./PaymentForm";

function PaymentV2({ classes }) {
  return (
    <>
      <Grid
        className={classes.Payment__wrapper}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid className={classes.Payment__title} item md="12">
          <StorefrontIcon />
          <Typography
            variant="h6"
            gutterBottom
            //className={classes.Home__product__title}
          >
            Checkout
          </Typography>
        </Grid>
        <div className={classes.Payment__wrapper__input__PaymentForm}>
        <Grid className={classes.Payment__wrapper__input} item md="12">
          <TextField
            // value={email}
            label="Full name"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            marginNormal
            className={classes.Payment__input}
            // className={classes.Login__email__form}
            // onChange={handleEmail}
          />
          <TextField
            // value={email}
            label="Street"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            marginNormal
            // className={classes.Login__email__form}
            // onChange={handleEmail}
            className={classes.Payment__input}
          />
          <TextField
            // value={email}
            label="CITY"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            marginNormal
            // className={classes.Login__email__form}
            // onChange={handleEmail}
            className={classes.Payment__input}
          />
          <TextField
            // value={email}
            label="STATE"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            marginNormal
            // className={classes.Login__email__form}
            // onChange={handleEmail}
            className={classes.Payment__input}
          />
          <TextField
            // value={email}
            label="ZIP"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            marginNormal
            // className={classes.Login__email__form}
            // onChange={handleEmail}
            className={classes.Payment__input}
          />
        </Grid>
        <Grid item md="12">
          <PaymentForm />
        </Grid>
        </div>
      </Grid>
    </>
  );
}

export default withStyles(styles)(PaymentV2);
