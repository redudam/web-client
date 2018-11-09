import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm from './containers/login/login';
import {PrivateRoute} from './utils';
import Home from './containers/home';

import { AuthButton } from "./components/auth-button";

const AppRouter = () => (
  <Router>
      <div>
        <AuthButton />
        <Route path="/login" exact component={LoginForm} />
        <PrivateRoute path='/' exact component={Home}></PrivateRoute>
      </div>
  </Router>
);


export default AppRouter;