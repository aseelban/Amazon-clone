import React from "react";
import { useStateValue } from "../context/StateProvider";
import useStyles from "./styles/ProductStyle";
import { Link } from 'react-router-dom'


function Product({id, title, image, oldPrice, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const classes = useStyles();


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
    <div className={classes.product__card}>
      <div className={classes.badge}>Hot</div>
      <div className={classes.product__tumb}>
        <img className={classes.product__tumb__img} src={image} alt="" />
      </div>
      <div className={classes.product__details}>
        <h4>
          <span className={classes.product__details__link} href="">{title}</span>
        </h4>
        <div className={classes.product__bottom__details}>
          <div className={classes.product__price}>
            <span className={classes.Product__oldPrice}>${oldPrice}</span>
            <span className={classes.Product__newPrice}>${price}</span>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default Product;
