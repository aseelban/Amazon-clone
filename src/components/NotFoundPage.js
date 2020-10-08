import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles/NotFoundPageStyle";

function NotFoundPage() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1>404</h1>
      <h3>Looks like the page you're looking for doesn't exist.</h3>
      <Link to="/">Take me back home</Link>
    </div>
  );
}

export default NotFoundPage;
