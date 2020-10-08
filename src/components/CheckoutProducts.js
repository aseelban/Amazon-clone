import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import useStyles from "./styles/CheckoutProductsStyle";
import { useStateValue } from "../context/StateProvider";

function CheckoutProducts({ id, title, image, price }) {
  const [{}, dispatch] = useStateValue();
  const classes = useStyles();

  


  const handleRemove = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <>
      <Grid
        container
        direction="row"
        className={classes.wrapper}
      >
        <Link
          to={`products/${title}`}
          className={classes.route}
        >
          <Grid
            className={classes.img__wrapper}
            items
            xs={12}
            md={6}
            item={true}
          >
            <img className={classes.img} src={image} alt={title} />
          </Grid>
        </Link>

        <Grid className={classes.info} items xs={12} md={6} item={true}>
          <h4>{title}</h4>
          <p className={classes.price}>${price}</p>
          <div className={classes.wrapper__remove}>
            <span onClick={handleRemove} id={id}>
              <ClearIcon />
            </span>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default CheckoutProducts;
