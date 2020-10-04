import React from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/styles";
import styles from "./styles/NotFoundPageStyle";

function NotFoundPage({ classes }) {
  return (
    <div className={classes.container}>
      <h1>404</h1>
      <h3>Looks like the page you're looking for doesn't exist.</h3>
      <Link to="/">Take me back home</Link>
    </div>
  );
}

export default withStyles(styles)(NotFoundPage);
