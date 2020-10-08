import React, { useEffect, useState } from "react";
import { useStateValue } from "../context/StateProvider";
import data from "../API/product.json";
import { useParams } from "react-router-dom";
import useStyles from "./styles/ProductPageStyle";
import { Rating } from "@material-ui/lab";
import { Snackbar } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ShareIcon from "@material-ui/icons/Share";

function ProductPage() {
  const [{}, dispatch] = useStateValue();
  const { productID } = useParams();
  const [product, setProduct] = useState([]);
  const [state, setState] = React.useState({
    horizontal: "center",
    open: false,
    vertical: "top",
  });
  const classes = useStyles();

  const { vertical, horizontal, open } = state;

  // snakebar msg
  const SnakebarMsg = `Added ${product.title} to cart.`;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
    // call basket handler
    addToBasket();
  };
  const handleClose = () => {
    setState({ ...state, open: false });
  };

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
    let getProduct = data.find(
      (productName) => productName.title === productID
    );
    setProduct(getProduct);
  }, []);

  useEffect(() => {
    document.title = `AmazonClone - ${product.title}`;
  });

  return (
    <>
      <div className={classes.ProductPage__container}>
        <div className={classes.ProductPage__product__image}>
          <img
            src={product.image}
            alt=""
            className={classes.ProductPage__product__pic}
          />
        </div>

        <div className={classes.ProductPage__product__details}>
          <header>
            <h1 className={classes.ProductPage__title}>{product.title}</h1>
            <span className={classes.ProductPage__colorCat}>
              {product.brand}
            </span>
            <div className={classes.ProductPage__newPrice}>
              <span className={classes.ProductPage__oldPrice}>
                ${product.oldPrice}
              </span>
              <span className={classes.ProductPage__current}>
                ${product.price}
              </span>
            </div>
            <div className={classes.ProductPage__rate}>
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
          <div className={classes.ProductPage__footer}>
            <button
              type="button"
              onClick={handleClick({ vertical: "top", horizontal: "right" })}
            >
              <AddShoppingCartIcon />
              <span>add to cart</span>
            </button>
            <a className={classes.share}>
              <ShareIcon />
            </a>
          </div>
        </div>
        <div className={classes.snakerbar__wrapper}>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            autoHideDuration={9000}
            open={open}
            onClose={handleClose}
            message={SnakebarMsg}
            key={vertical + horizontal}
            action={
              <React.Fragment>
                <IconButton
                  aria-label="close"
                  color="inherit"
                  onClick={handleClose}
                >
                  <CloseIcon />
                </IconButton>
              </React.Fragment>
            }
          />
        </div>
      </div>
    </>
  );
}

export default ProductPage;
