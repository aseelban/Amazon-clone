import React from "react";
import { useStateValue } from "../context/StateProvider";
import "./styles/Product.css";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("this is : " , basket);

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
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="prodcut__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p>⭐</p>;
            })}
        </div>
      </div>

      <img className="product__img" src={image} />
      <button onClick={addToBasket} className="product__cartButton">
        Add to cart
      </button>
    </div>
  );
}

export default Product;
