import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { useStateValue } from "./context/StateProvider";
import { auth } from "./firebase";

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
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
