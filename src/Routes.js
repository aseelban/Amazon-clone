import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import NotFoundPage from "./components/NotFoundPage";
import Payment from "./components/Payment";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import ProductPage from "./components/ProductPage";
import Products from "./components/Products";

const Routes = withRouter(({ location }) => {
  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/signup" ? (
        <Header />
      ) : null}
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/products" render={() => <Products />} />
        <Route
          exact
          path="/products/:productID"
          render={() => <ProductPage />}
        />
        <Route path="/checkout" render={() => <Checkout />} />
        <Route path="/payment" render={() => <Payment />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/signup" render={() => <Signup />} />

        <Route render={() => <NotFoundPage />} />
      </Switch>
      {location.pathname !== "/login" && location.pathname !== "/signup" ? (
        <Footer />
      ) : null}
    </>
  );
});

export default withRouter(Routes);