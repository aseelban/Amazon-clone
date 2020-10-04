import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import data from "../API/product.json";
import "./styles/ProductPageStyle.css";
import { useStateValue } from "../context/StateProvider";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

function ProductPage() {
  const [product, setProduct] = useState([]);
  const { productID } = useParams();
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // push the data into data layer 'context API'
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        rating: product.rating,
      },
    });
  };

  useEffect(() => {
    let getProduct = data.find((productName) => productName.title === productID);
    setProduct(getProduct)

    
  }, []);
  
  useEffect(() => {
    document.title = `AmazonClone - ${product.title}`;
  });

  return (
    <>
      <div class="ProductPage__container">
        <div class="ProductPage__product-image">
          <img src={product.image} alt="" class="ProductPage__product-pic" />
        </div>

        <div class="ProductPage__product-details">
          <header>
            <h1 class="ProductPage__title">{product?.title}</h1>
            <span class="ProductPage__colorCat">{product.brand}</span>
            <div class="ProductPage__newPrice">
              <span class="ProductPage__oldPrice">${product.oldPrice}</span>
              <span class="ProductPage__current">${product.price}</span>
            </div>
            <div class="ProductPage__rate">
              <Rating
                name="read-only"
                value={parseInt(product.rating)}
                readOnly
              />
            </div>
          </header>
          <article>
            <h5>Description</h5>
            <p>{product.des}</p>
          </article>
          <div class="ProductPage__footer">
            <button type="button" onClick={addToBasket}>
              <AddShoppingCartIcon />
              <span>add to cart</span>
            </button>
            <a href="#!">
              <img
                src="http://co0kie.github.io/codepen/nike-product-page/share.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
