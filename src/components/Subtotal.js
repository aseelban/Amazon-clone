import {
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core";
import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/SubTotalStyle";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../context/StateProvider";
import { getBasketTotal } from "../context/reducer";
import { useHistory } from "react-router-dom";

function Subtotal({ classes }) {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();

  const handleCheckout = (e) => {
    e.preventDefault();
    history.push("/payment");
  };

  return (
    <div className="Subtotal">
      <CurrencyFormat
        renderText={(value) => {
          return (
            <>
              <Card className={classes.chekout__right__wrapper}>
                <div className={classes.subtotal__items}>
                  {/* Subtotal ({basket?.length} items): */}
                  Subtotal ({basket?.length} items):
                </div>
                <span className={classes.subtotal__price}>{value}</span>
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
                  onClick={handleCheckout}
                >
                  Proceed to checkout
                </Button>
              </Card>
            </>
          );
        }}
        value={getBasketTotal(basket)}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default withStyles(styles)(Subtotal);
