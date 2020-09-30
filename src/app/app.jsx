import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const App = ({errorAmount}) => {
  return <WelcomeScreen errorAmount={errorAmount}/>;
};

App.propTypes = {
  errorAmount: PropTypes.number.isRequired
};

export default App;
