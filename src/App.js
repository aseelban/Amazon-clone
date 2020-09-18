import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { useStateValue } from "./context/StateProvider";
import { auth } from "./firebase";
import NotFoundPage from "./components/NotFoundPage";
import Payment from "./components/Payment";
import './app.css'

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("Username => ", authUser);

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
    <div className={'app_wrapper'}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route exact path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route exact path="/payment">
          <Header />
          <Payment />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route>
          <Header />
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
