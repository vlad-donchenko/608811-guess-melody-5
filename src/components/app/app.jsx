import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import AuthScreen from "../auth-screen/auth-screen.jsx";
import WinScreen from "../win-screen/win-screen.jsx";
import GameOverScreen from "../game-over-screen/game-over-screen.jsx";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";

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
        <Route
          exact
          path="/result"
        >
          <WinScreen/>
        </Route>
        <Route
          exact
          path="/dev-artist"
        >
          <ArtistQuestionScreen/>
        </Route>
        <Route
          exact
          path="/dev-genre"
        >
          <GenreQuestionScreen/>
        </Route>
        <Route
          exact
          path="/lose"
        >
          <GameOverScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorAmount: PropTypes.number.isRequired
};

export default App;
