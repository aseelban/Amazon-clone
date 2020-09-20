import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/HomeStyle";
//import "./styles/Home.css";
import prime_background from "./img/home_prime_img.jpg";
import Product from "./Product";
import { Grid, Typography } from "@material-ui/core";
import DiscoverIcons from "./DiscoverIcons";

function Home({ classes }) {
  return (
    <div className={classes.home}>
      <div className={classes.home__container}>
        <img className={classes.home__image} src={prime_background} />
      </div>
      {/* icon slider */}
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
            Discover Amazon
          </Typography>
        </Grid>
        <Grid className={classes.home__wrapper__discover} container direction="row" justify="center" alignItems="center">
        <Grid  item xs={12}>
          <DiscoverIcons />
        </Grid>
      </Grid>
      </Grid>
      {/* products */}
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
        <Grid item xs={5} md={3}>
          <Product
            id={6}
            title="title lorem ipsum dummy text ipsum dummy text"
            image={"https://pngimg.com/uploads/coffee_machine/coffee_machine_PNG17289.png"}
            oldPrice={950}
            price={899}
            rating={6}
          />
        </Grid>
        <Grid item xs={5} md={3}>
          <Product
            id={6}
            title="title lorem ipsum dummy text ipsum dummy text"
            image={
              "https://pngimg.com/uploads/headphones/headphones_PNG7659.png"
            }
            oldPrice={139}
            price={95}
            rating={3}
          />{" "}
        </Grid>
        <Grid item xs={5} md={3}>
          <Product
            id={6}

            title="title lorem ipsum dummy text ipsum dummy text"

            image={"https://pngimg.com/uploads/drone/drone_PNG81.png"}
            oldPrice={699}
            price={450}
            rating={3}
          />{" "}
        </Grid>
        <Grid item xs={5} md={3}>
          <Product
            id={6}
            title="title lorem ipsum dummy text ipsum dummy text"
            image={"https://pngimg.com/uploads/iphone_11/iphone_11_PNG33.png"}
            oldPrice={999}
            price={949}
            rating={3}
          />{" "}
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Home);
