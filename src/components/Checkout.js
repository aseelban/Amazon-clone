import React from "react";
import styles from "./styles/CheckoutStyle";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import Subtotal from "./Subtotal";
import { useStateValue } from "../context/StateProvider";
import { Button } from "@material-ui/core";

function Checkout({ classes, id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log(basket);

  const handleClick = (e) => {
    basket.filter((product) => product.id !== e.target.id);
    console.log(basket.map((e) => e.id));
  };

  const list__products = basket.map((item) => {
    return (
      <Grid
        key={item.id}
        container
        spacing={1}
        direction="row"
        justify="flex-start"
      >
        <Grid items xs={4}>
          <img className={classes.Checkout__product_img} src={item.image} />
        </Grid>
        <Grid items xs={7}>
          <h4>{item.title}</h4>
          <p>{item.price}$</p>
          <div className={classes.checkout__rating}>
            {Array(item.rating)
              .fill()
              .map((_, i) => {
                return <div>⭐</div>;
              })}
          </div>
          <Button
            className={classes.Checkout__remove__button}
            size="small"
            variant="outlined"
            variant="contained"
            onClick={handleClick}
            id={item.id}
          >
            Remove from chekout
          </Button>
        </Grid>
      </Grid>
    );
  });
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
          {list__products}
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
