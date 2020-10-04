import React, { useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaymentStyle";
import {
  Grid,
  Typography,
} from "@material-ui/core";
import StorefrontIcon from "@material-ui/icons/Storefront";
import PaymentForm from "./PaymentForm";
import PaymentUserInfo from "./PaymentUserInfo";
import PaymentOrder from "./PaymentOrder";

function Payment({ classes }) {

  useEffect(() => {
    document.title = "AmazonClone - Checkout";
  }, []);
  return (
    <>
      <Grid
        className={classes.container}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid className={classes.title} item md="12" item={true}>
          <StorefrontIcon />
          <Typography
            variant="h5"
            gutterBottom={false}
            //className={classes.Home__product__title}
          >
            Checkout
          </Typography>
        </Grid>
        <div className={classes.wrapper__children}>
          <PaymentOrder />
          <PaymentUserInfo />
          <PaymentForm />
        </div>
      </Grid>
    </>
  );
}

export default withStyles(styles)(Payment);
