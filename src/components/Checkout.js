import React from "react";
import styles from "./styles/CheckoutStyle";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import Subtotal from "./Subtotal";
import { useStateValue } from "../context/StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout({ classes }) {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className={classes.checkout}>
      <Grid
        container
        spacing={1}
        direction="row"
        justify="center"
        alignItems="stretch"
      >
        <Grid className={classes.chekout__left} item xs={7}>
          {/* 
             ad banner
         */}
          <div className="chekout__ad">
            <img
              className={classes.checkout__img_ad}
              src="https://images-eu.ssl-images-amazon.com/images/G/31/digital/music/merch/India/2017/Weekly/0912/Download_the_apps_music_india_hero.jpg"
            />
          </div>
          {/* 
            shopping list items
          */}
          <div className={classes.checkout__left__title}>
            <h2>Your shopping list:</h2>
          </div>
          {/* 
            render the checkout list items:
          */}
          {basket.map((product) => (
            <CheckoutProduct
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </Grid>
        {/* 
            Subtotal:
        */}
        <Grid item xs={4}>
          <Subtotal />
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Checkout);
