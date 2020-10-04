import React from "react";
import { useStateValue } from "../context/StateProvider";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/ProductStyle";
import { Link } from 'react-router-dom'


function Product({ classes, id, title, image, oldPrice, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const productdata = [id, title, image, oldPrice, price, rating];

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
    <Link className={classes.Product__route} productdata={productdata} test="123" to={`/products/${title}`}>
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
            <span className={classes.Product__oldPrice}>${oldPrice}</span>
            <span className={classes.Product__newPrice}>${price}</span>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default withStyles(styles) (Product);
