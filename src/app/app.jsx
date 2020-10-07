import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import AuthScreen from "../auth-screen/auth-screen.jsx";

const App = ({errorAmount}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
        >
          <WelcomeScreen errorAmount={errorAmount}/>
        </Route>
        <Route
          exact
          path="/login"
        >
          <AuthScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorAmount: PropTypes.number.isRequired
};

export default App;
