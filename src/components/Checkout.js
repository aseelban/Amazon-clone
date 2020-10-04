import React, { useEffect } from "react";
import styles from "./styles/CheckoutStyle";
import amazon_banner from "./img/amazon_banner.png";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import Subtotal from "./Subtotal";
import { useStateValue } from "../context/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Typography } from "@material-ui/core";

function Checkout({ classes }) {
  const [{ basket}, dispatch] = useStateValue();

  useEffect(() => {
    document.title = "AmazonClone - Cart";
  }, []);

  return (
    <div className={classes.checkout}>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="center"
        className={classes.wrapper__ad__subtotal}
      >
        <Grid className={classes.chekout__left} item xs={11} md={7} lg={7}>
          {/* 
             ad banner
         */}
          <div className="chekout__ad">
            <img className={classes.img_ad} src={amazon_banner} />
          </div>
        </Grid>
        {/* 
            Subtotal:
        */}
        <Grid item xs={11} md={4} lg={3}>
          <Subtotal />
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        {/* 
            shopping list items
        */}
        <Grid className={classes.list} item xs={12} md={8}>
          <div className={classes.left__title}>
            <Typography
          variant="h5"
          gutterBottom={false}
          className={classes.title}
        >
         Your shopping list:
        </Typography>
          </div>
        </Grid>
        {/* 
            render the checkout list items:
        */}
        {basket?.length === 0 ? (
          <Typography
          variant="subtitle1"
          gutterBottom={false}
          className={classes.emptyText}
        >
          Cart is Empty!
        </Typography>
        ) : (
          <Grid className={classes.list__product} item xs={12} md={8}>
            {basket.map((product, i) => (
              <CheckoutProduct
                key={i}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                rating={product.rating}
              />
            ))}
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Checkout);
