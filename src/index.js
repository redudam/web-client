import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AppRouter from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

//import TaskView from './containers/taskview/taskview'
//import SignUpForm from './containers/signup/signup';
import TaskView from './containers/taskview/taskview';

ReactDOM.render(<TaskView></TaskView>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
