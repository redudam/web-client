import React from 'react';
import classnames from 'classnames';

import { Button, FormGroup,  Input,  Alert, TabContent, TabPane, CardTitle, Row, Col, CardText, Card, Nav, NavItem, NavLink } from 'reactstrap';
import './taskdetails.css';
import productLogo from '../../logo.png';
import { getTaskById } from '../../api';

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
    return null;
  }
}
