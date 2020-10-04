import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useStateValue } from "./context/StateProvider";
import { auth } from "./firebase";
import "./app.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import NotFoundPage from "./components/NotFoundPage";
import Payment from "./components/Payment";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import ProductPage from "./components/ProductPage";
import Products from './components/Products'

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {

      if (authUser) {
        // the user logged in // the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });

      } else {
        // the user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className={"app_wrapper"}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route exact path="/products">
            <Header />
            <Products />
            <Footer />
          </Route>
          <Route exact path="/products/:productID">
            <Header />
            <ProductPage />
            <Footer />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route exact path="/payment">
            <Header />
            <Payment />
            <Footer />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route>
            <Header />
            <NotFoundPage />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
