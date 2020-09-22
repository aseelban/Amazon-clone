import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/HomeStyle";
import prime_background from "./img/home_prime_img.jpg";
import { Grid, Typography } from "@material-ui/core";
import DiscoverList from "./DiscoverList";
import ProductList from "./ProductList";

function Home({ classes }) {
  return (
    <div className={classes.home}>
      <div className={classes.home__container}>
        <img className={classes.home__image} src={prime_background} />
      </div>
      {/* 
      - Discover section 
      */}
      {/* title Discover */}
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid
          style={{
            zIndex: "2",
            display: "grid",
            // margin: " 0.4rem 0",
            justifyContent: "flex-start",
          }}
          item
          xs={12}
        >
          <Typography
            variant="h6"
            gutterBottom
            className={classes.Home__product__title}
          >
            Discover Amazon
          </Typography>
        </Grid>
        {/* list Discover */}
        <Grid
          className={classes.home__wrapper__discover}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <DiscoverList />
          </Grid>
        </Grid>
      </Grid>
      {/* 
       - products section 
      */}
      {/* products title */}
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid
          style={{
            zIndex: "2",
            display: "grid",
            margin: " 0.4rem 0",
            justifyContent: "flex-start",
          }}
          item
          xs={12}
        >
          <Typography
            variant="h6"
            gutterBottom
            className={classes.Home__product__title}
          >
            Popular right now
          </Typography>
        </Grid>
      </Grid>
      {/* list products */}
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12}>
          <ProductList />
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Home);
