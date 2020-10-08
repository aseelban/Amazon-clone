import React, { useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import useStyles from "./styles/HomeStyle";
import prime_background from "./img/home_prime_img.jpg";
import { Grid, Typography } from "@material-ui/core";
import DiscoverList from "./DiscoverList";
import ProductList from "./ProductList";

function Home() {
  const classes = useStyles();

  useEffect(() => {
    document.title = "AmazonClone - Home";
  }, []);
  return (
    <div className={classes.container}>
      <div>
        <img className={classes.image} src={prime_background} alt="prime ad"/>
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
            className={classes.product__title}
          >
            Discover Amazon
          </Typography>
        </Grid>
        {/* list Discover */}
        <Grid
          className={classes.wrapper__discover}
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
            className={classes.product__title}
          >
            Popular right now
          </Typography>
        </Grid>
      </Grid>
      {/* list products */}
      <Grid className={classes.wrapper__ProductsList} container direction="row" justify="center" alignItems="center">
        <Grid item xs={12}>
          <ProductList />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
