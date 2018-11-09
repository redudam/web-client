import React from 'react';
import classnames from 'classnames';

import { Button, FormGroup,  Input,  Alert, TabContent, TabPane, CardTitle, Row, Col, CardText, Card, Nav, NavItem, NavLink } from 'reactstrap';
import './taskview.css';
import productLogo from '../../logo.png';

class Tasks extends React.Component {
  render() {
    return null;
  }
}

class Task extends React.Component {
  render() {
    return null;
  }
}

export default class TaskView extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div id="mainContainer">
        <div id="navbar">
          <img alt="productlogo" id="productLogo" src={productLogo} />
        </div>
        <div id="taskLabelContainer">
          <h1>Задачи</h1>
        </div>
        <Nav id="mainNavBar" tabs>
          <NavItem style={{width: '25%'}}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              мои
            </NavLink>
          </NavItem>
          <NavItem style={{width: '37.5%'}}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              доступные
            </NavLink>
          </NavItem>
          <NavItem style={{width: '37.5%'}}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              выполнено
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Tasks>
            </Tasks>
          </TabPane>
          <TabPane tabId="2">
            <Tasks>
            </Tasks>
          </TabPane>
          <TabPane tabId="3">
            <Tasks>
            </Tasks>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
