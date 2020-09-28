import {
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaymentOrderStyle";
import { useStateValue } from "../context/StateProvider";
import { getBasketTotal } from "../context/reducer";

function PaymentOrder({ classes }) {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <Grid
      className={classes.PaymentOrder__wrapper}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid className={classes.PaymentOrder__wrapper__title} item md="12">
        <Typography
          variant="h6"
          className="PaymentForm__title"
          gutterBottom
          display="inline"
        >
          ORDER SUMMARY
        </Typography>
      </Grid>
      <Grid item md="12">
        <ul className={classes.PaymentOrder__wrapper__list}>
          <li>
            <span className={classes.PaymentOrder__key}>Subtotal <span className={classes.PaymentOrder__vat}>(Inclusive of VAT)
</span></span>
            <span className={classes.PaymentOrder__val}>${getBasketTotal(basket)}</span>
          </li>
          <li>
            <span className={classes.PaymentOrder__key}>Total Items</span>
            <span className={classes.PaymentOrder__val}>{basket?.length}</span>
          </li>
          <li>
            <span className={classes.PaymentOrder__key}>Shipping Fee</span>
            <span className={classes.PaymentOrder__val}>Free</span>
          </li>
        </ul>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(PaymentOrder);
