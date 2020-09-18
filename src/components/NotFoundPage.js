import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from './styles/NotFoundPageStyle';


function NotFoundPage({classes}) {
  return (
    <div className={classes.NotFoundPage__title}>
      <h2>Not Found Page 404</h2>
    </div>
  );
}

export default withStyles(styles)(NotFoundPage);
