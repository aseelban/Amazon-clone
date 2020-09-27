import React from "react";
import { withStyles } from "@material-ui/styles";
import "./styles/PaymentV2.css";
import styles from "./styles/PaymentV2Style";
import {
  Grid,
  Typography,
} from "@material-ui/core";
import StorefrontIcon from "@material-ui/icons/Storefront";
import PaymentForm from "./PaymentForm";
import PaymentUserInfo from "./PaymentUserInfo";
import PaymentOrder from "./PaymentOrder";

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
          <PaymentOrder />
          <PaymentUserInfo />
          <PaymentForm />
        </div>
      </Grid>
    </>
  );
}

export default withStyles(styles)(PaymentV2);
