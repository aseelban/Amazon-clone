import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/LoginStyle";
import Grid from "@material-ui/core/Grid";
import logo from "./img/amazon_logo_login.png";
import {
  FormControl,
  TextField,
  Button,
  Divider,
  Typography,
  IconButton,
  Collapse,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";


function Login({ classes }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIslogged] = useState(false);
  const [open, setOpen] = React.useState(true);
  const history = useHistory();

  useEffect(() => {
    document.title = "AmazonClone - Login";
  }, []);

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
          setTimeout(() => {
            history.push("/");
          }, 500);
        }
      })
      .catch((error) => setIslogged(true));
  };

  return (
    <div className={classes.container}>
      <Grid
        container
        spacing={1}
        direction="row"
        justify="center"
        alignItems="stretch"
      >
        <Grid className={classes.image__wrapper} item xs="12">
          <Link to="/">
            <img className={classes.logo} src={logo} />
          </Link>
        </Grid>
        <Grid item xs="12">
          <div className={classes.form__wrapper}>
            <h3 className={classes.form__title}>Sign-in</h3>
            <FormControl>
              {/* <div > */}
              <TextField
                value={email}
                label="Your Email"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                marginNormal
                className={classes.email__form}
                onChange={handleEmail}
              />
              <TextField
                value={password}
                label="Your Password"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                marginNormal
                className={classes.password__form}
                onChange={handlePassword}
                type={"password"}
              />
              <Button
                variant="contained"
                size="small"
                className={classes.submit__form}
                onClick={signIn}
              >
                Login
              </Button>
            </FormControl>
              <div className={classes.error__msg}>
                {isLogged && (
                  <Collapse in={open}>
                    <Alert
                      severity="error"
                      action={
                        <IconButton
                          aria-label="close"
                          color="inherit"
                          size="small"
                          onClick={() => {
                            setIslogged(false);
                          }}
                        >
                          <CloseIcon fontSize="inherit" />
                        </IconButton>
                      }
                    >
                      The Email and password you entered did not match our
                      records. Please double-check and try again.
                    </Alert>
                  </Collapse>
                )}
              </div>
            <p className={classes.legalText}>
              By continuing, you agree to Amazon's Conditions of Use and Privacy
              Notice.
            </p>
          </div>
          <div className={classes.singup__wrapper}>
            <Typography
              className={classes.singup__text}
              color="textSecondary"
              variant="body2"
            >
              New to Amazon?
            </Typography>
            <Divider variant="middle" />
            <Button
              onClick={() => history.push("/signup")}
              variant="contained"
              size="small"
              color="defualt"
              className={classes.signup__button}
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
