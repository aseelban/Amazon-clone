import React from "react";
import { withStyles } from "@material-ui/styles";
import { Button, Grid } from "@material-ui/core";
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';
import styles from './styles/CheckoutProductStyle'
import { useStateValue } from "../context/StateProvider";

function CheckoutProductProduct({ classes, id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const handleRemove = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }
  return (
    <>
      <Grid
        container
        // spacing={1}
        direction="row"
        // justify="flex-start"
        className={classes.CheckoutProduct__wrapper}
      >
        <Grid className={classes.CheckoutProduct__img__wrapper} items xs={12} md={6}>
          <img className={classes.CheckoutProduct__img} src={image} />
        </Grid>
        <Grid className={classes.CheckoutProduct__info} items xs={12} md={6}>
          <h4>{title}</h4>
          <p>{price}$</p>
          <div className={classes.CheckoutProduct__rating}>
            {Array(rating)
              .fill()
              .map((_, i) => {
                return <StarRateRoundedIcon key={i} className={classes.CheckoutProduct__ratingIcon}/>;
              })}
          </div>
          <Button
            className={classes.CheckoutProduct__remove__button}
            size="small"
            variant="contained"
            onClick={handleRemove}
            id={id}
          >
            Remove from chekout
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default withStyles(styles)(CheckoutProductProduct);
