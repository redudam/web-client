import React from 'react';
import classnames from 'classnames';

import { Button, FormGroup,  Input,  Alert, TabContent, TabPane, CardTitle, Row, Col, CardText, Card, Nav, NavItem, NavLink } from 'reactstrap';
import './taskdetails.css';
import productLogo from '../../logo.png';

import tempPic from './template.png';

export default class TaskDetails extends React.Component {
  render() {
    return (
      <div id="imgContainer">
        <img src={tempPic} alt="Задача" id="taskImage" />
        <div id="titleInfo">
          <span id="taskName">Котята, щенята, уточка</span><br />
          <span id="orgName">Приют ДРУГ</span>
        </div>
      </div>
    );
  }
}
