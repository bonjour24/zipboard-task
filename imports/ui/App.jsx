import React, { Fragment } from "react";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Hello } from "./Hello.jsx";
import { Info } from "./Info.jsx";
import { LoginForm } from "./LoginForm.jsx";
import Navbar from "./common/Navbar.jsx";
import { SignInform } from "./signInForm.jsx";

export const App = () => {
  const user = useTracker(() => Meteor.user());
  return (
    <BrowserRouter>
      <div>
        <Navbar user={user} />
        <Switch>
          <Route exact path="/" user={user} component={Hello} />
          <Route path="/login" component={LoginForm} />
          <Route path="/sign" component={SignInform} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
