import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useStateValue } from "./context/StateProvider";
import { auth } from "./firebase";
import "./app.css";
import Routes from "./Routes";
import ScrollToTop from "./components/helper/ScrollToTop";

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
        <ScrollToTop />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
