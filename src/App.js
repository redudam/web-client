import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginForm from './containers/login/login';

const AppRouter = () => (
  <Router>
      <Route path="/" exact component={LoginForm} />
  </Router>
);


export default AppRouter;