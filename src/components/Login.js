import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import styles from "./styles/LoginStyle";
import logo from "./img/amazon_logo_login.png";

import {
  FormControl,
  TextField,
  Button,
  Divider,
  Typography,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

function Login({ classes }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className={classes.Login__wrapper}>
      <Grid
        container
        spacing={1}
        direction="row"
        justify="center"
        alignItems="stretch"
      >
        <Grid className={classes.Login__image__wrapper} item xs="12">
          <Link to="/">
            <img className={classes.Login__logo} src={logo} />
          </Link>
        </Grid>
        <Grid item xs="12">
          <div className={classes.Login__form__wrapper}>
            <h3 className={classes.Login__form__title}>Sign-in</h3>
            <FormControl>
              {/* <div > */}
              <TextField
                value={email}
                label="Your Email"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                marginNormal
                className={classes.Login__email__form}
                onChange={handleEmail}
              />
              <TextField
                value={password}
                label="Your Password"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                marginNormal
                className={classes.Login__password__form}
                onChange={handlePassword}
                type={"password"}
              />
              <Button
                variant="contained"
                size="small"
                className={classes.Login__submit__form}
                onClick={signIn}
              >
                Login
              </Button>
            </FormControl>
            <p className={classes.Login__legalText}>
              By continuing, you agree to Amazon's Conditions of Use and Privacy
              Notice.
            </p>
          </div>
          <div className={classes.Login__singup__wrapper}>
            <Typography
              className={classes.Login__singup__text}
              color="textSecondary"
              variant="body2"
            >
              New to Amazon?
            </Typography>
            <Divider variant="middle" />
            <Button
              onClick={register}
              variant="contained"
              size="small"
              color="defualt"
              className={classes.Login__signup__button}
            >
              Create your Amazon account
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Login);
