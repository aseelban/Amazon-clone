import {
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core";
import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/SubTotalStyle";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../context/StateProvider";

function Subtotal({ classes, id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log(basket);

  const total_price = basket.reduce((a, { price }) => a + price, 0);

  return (
    <div className="Subtotal">
      <CurrencyFormat
        renderText={(value) => {
          return (
            <>
              <Card className={classes.chekout__right__wrapper}>
                <div className={classes.subtotal__items}>
                  Subtotal ({basket?.length} items):
                </div>
                <span className={classes.subtotal__price}>
                  {value}
                </span>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        // checked={state.checkedB}
                        // onChange={handleChange}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="This item contains gift"
                  />
                </FormGroup>
                <Button
                  className={classes.checkout__right__buttom}
                  variant="contained"
                  // onClick={sum_total}
                >
                  Proceed to checkout
                </Button>
              </Card>
            </>
          );
        }}
        value={total_price}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default withStyles(styles)(Subtotal);
