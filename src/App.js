import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm from './containers/login/login';
import SignUpForm from './containers/signup/signup';
import TaskView from "./containers/taskview/taskview";
import TaskDetails from './containers/taskdetails/taskdetails';
import Profile  from './containers/profile';
import CreateTask from './containers/create-task';
import Organizations from './containers/organizations';


const AppRouter = () => (
  <Router>
      <div>
        <Route path="/login" exact component={LoginForm} />
        <Route path='/signup/:inviteToken' exact component={SignUpForm} />
        <Route path='/signup' exact component={SignUpForm} />
        <Route path='/task/:id' exact component={TaskDetails} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/create-task' exact component={CreateTask} />
        <Route path='/organizations' exact component={Organizations} />
        <Route path='/' exact component={TaskView} />
      </div>
  </Router>
);


export default AppRouter;
