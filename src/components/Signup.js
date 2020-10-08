import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, db } from "../firebase";
import useStyles from "./styles/SignupStyle";
import Grid from "@material-ui/core/Grid";
import logo from "./img/amazon_logo_login.png";
import {
  FormControl,
  TextField,
  Button,
  Collapse,
  IconButton,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigned, setISigned] = useState(false);
  const [open, setOpen] = React.useState(true);
  const history = useHistory();
  const classes = useStyles();


  useEffect(() => {
    document.title = "AmazonClone - Sign up";
  }, []);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
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
      .catch((error) => setISigned(true));
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
            <h3 className={classes.form__title}>Sign-up</h3>
            <FormControl>
              <TextField
                value={username}
                label="Your Name"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                marginNormal
                className={classes.email__form}
                onChange={handleUsername}
              />
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
                onClick={register}
              >
                Sign up
              </Button>
            </FormControl>
            <div className={classes.error__msg}>
              {isSigned && (
                <Collapse in={open}>
                  <Alert
                    severity="error"
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                          setISigned(false);
                        }}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    }
                  >
                    Please enter a valid Email address and password.
                  </Alert>
                </Collapse>
              )}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Signup;
