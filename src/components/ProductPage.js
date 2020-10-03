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
  let _product = product[0];

  const addToBasket = () => {
    // push the data into data layer 'context API'
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: _product?.id,
        title: _product?.title,
        image: _product?.image,
        price: _product?.price,
        rating: _product?.rating,
      },
    });
  };

  useEffect(() => {
    let productData = data.filter(
      (productName) => productName.title === productID
    );
    setProduct(productData);
  }, []);

  console.log(isNaN(_product?.rating));

  return (
    <>
      <div class="ProductPage__container">
        <div class="ProductPage__product-image">
          <img src={_product?.image} alt="" class="ProductPage__product-pic" />
        </div>

        <div class="ProductPage__product-details">
          <header>
            <h1 class="ProductPage__title">{_product?.title}</h1>
            <span class="ProductPage__colorCat">{_product?.brand}</span>
            <div class="ProductPage__newPrice">
              <span class="ProductPage__oldPrice">${_product?.oldPrice}</span>
              <span class="ProductPage__current">${_product?.price}</span>
            </div>
            <div class="ProductPage__rate">
              <Rating
                name="read-only"
                value={parseInt(_product?.rating)}
                readOnly
              />
            </div>
          </header>
          <article>
            <h5>Description</h5>
            <p>{_product?.des}</p>
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
