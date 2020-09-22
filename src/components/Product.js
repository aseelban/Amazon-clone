import React from "react";
import { useStateValue } from "../context/StateProvider";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/ProductStyle";

function Product({ classes, id, title, image, oldPrice, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // push the data into data layer 'context API'
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div class={classes.product__card}>
      <div class={classes.badge}>Hot</div>
      <div class={classes.product__tumb}>
        <img class={classes.product__tumb__img} src={image} alt="" />
      </div>
      <div class={classes.product__details}>
        <h4>
          <a className={classes.product__details__link} href="">{title}</a>
        </h4>
        <div class={classes.product__bottom__details}>
          <div class={classes.product__price}>
            <small>${oldPrice}</small>${price}
          </div>
          <div class={classes.product__links}>
            <button className={classes.product__fav}>
              <FavoriteIcon />
            </button>
            <button className={classes.product__cart} onClick={addToBasket}>
              <ShoppingCartIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles) (Product);
