import React from 'react';
import classnames from 'classnames';

import { Button, FormGroup,  Input,  Alert, TabContent, TabPane, CardTitle, Row, Col, CardText, Card, Nav, NavItem, NavLink } from 'reactstrap';
import './taskdetails.css';
import { getTaskById } from '../../api';
import {Header} from '../../components/header';
import tempPic from './template.png';

export default class TaskDetails extends React.Component {
  constructor(props) {
    super(props);
  } 

  componentDidMount() {
    getTaskById(this.props.match.params.id).then(task => {
      this.setState({task});
    });
  }
  
  render() {
    return (
      <div>
        <Header></Header>
      <div id="imgContainer">
        <img src={tempPic} alt="Задача" id="taskImage" />
        <div id="titleInfo">
          <span id="taskName">Котята, щенята, уточка</span><br />
          <span id="orgName">Приют ДРУГ</span>
        </div>
        </div>
      </div>
    );
  }
}
