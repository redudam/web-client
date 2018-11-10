import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm from './containers/login/login';
import {PrivateRoute} from './utils';
import SignUpForm from './containers/signup/signup';
import TaskView from "./containers/taskview/taskview";
import TaskDetails from './containers/taskdetails/taskdetails';
import { Profile } from './containers/profile';

const AppRouter = () => (
  <Router>
      <div>
        <Route path="/login" exact component={LoginForm} />
        <Route path='/signup' exact component={SignUpForm} />
        <PrivateRoute path='/task/:id' exact component={TaskDetails}></PrivateRoute>
        <PrivateRoute path='/profile' exact component={Profile}></PrivateRoute>
        <PrivateRoute path='/' exact component={TaskView}></PrivateRoute>
      </div>
  </Router>
);


export default AppRouter;
