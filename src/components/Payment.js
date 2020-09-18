import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaymentStyle";
import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { useStateValue } from "../context/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";

const data = {
  email: "aseelban@gmail.com",
  address: "123 APL Lane",
  city: "NewYork, US",
};

function Payment({ classes }) {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <>
      <Grid container spacing={1}>
        <Grid className={classes.Payment__checkout__title} items xs={12}>
          <h2>
            Checkout:{" "}
            <Link className={classes.Payment__link} to={"/checkout"}>
              {basket.length} items
            </Link>
          </h2>
        </Grid>
      </Grid>
      <Grid container justify={"flex-start"} spacing={1}>
        <Grid className={classes.Payment__delvery__title} items xs={4} md={3}>
          <h3 className={classes.Payment__delvery__title__text}>
            Delvery Address
          </h3>
        </Grid>
        <Grid className={classes.Payment__delvery__info} items xs={6} md={8}>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <MailOutlineIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={data.email} />
              </ListItem>
            </List>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <HomeOutlinedIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={data.address} />
              </ListItem>
            </List>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <LanguageOutlinedIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={data.city} />
              </ListItem>
            </List>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid container className={classes.Payment__review__title} items md={3}>
          <h3 className={classes.Payment__review__title__text}>
            Review items and delevery
          </h3>
        </Grid>
        <Grid items md={8}>
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
      </Grid>

      <Grid container>
        <Grid className={classes.Payment__method__title} xs={12} md={3}>
          <h3 className={classes.Payment__method__title__text}>
            Payment method:
          </h3>
        </Grid>
        <Grid xs={8}>
          <h1>payment data</h1>
        </Grid>
      </Grid>
    </>
  );
}

export default withStyles(styles)(Payment);


function Sample({username}) {
  
  
  return(
    <>
    	<h2>Name: {username}</h2>
    </>
    
  )
  
}
