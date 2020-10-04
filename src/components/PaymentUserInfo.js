import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaymentUserInfoStyle";
import { Grid, TextField, Typography } from "@material-ui/core";

function PaymentUserInfo({ classes }) {
  return (
    <Grid className={classes.container} item md="12">
      <Typography
        variant="h6"
        className="PaymentForm__title"
        gutterBottom
        display="inline"
      >
        FILL IN YOUR ADDRESS
      </Typography>
      <TextField
        // value={email}
        label="Full name"
        id="outlined-size-small"
        variant="outlined"
        size="small"
        marginNormal
        
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
        
      />
    </Grid>
  );
}

export default withStyles(styles)(PaymentUserInfo);
