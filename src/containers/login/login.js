import React from 'react';
import ReactDOM from 'react-dom';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './login.css';
import vklogo from './vklogo.png';
import { fakeAuth } from '../../auth';
import { Redirect } from 'react-router-dom';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {redirectToReferrer: false};
    this.login = this.login.bind(this);
  }
  
  login() {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  }
  
  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <form id="loginForm">
        <h1>Вход</h1>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input type="email" name="email" id="emailInput" placeholder="Электронная почта" />
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input type="password" name="password" id="passwordInput" placeholder="Пароль" />
        </FormGroup>
        <Button type="button" onClick={() => this.login()} color="success" id="loginDirectly">Вход</Button>
        <Button type="button" id="loginVK">Вход через<img src={vklogo} id="smallImage" /></Button>
        <Button color="link">Нет аккаунта?</Button>
      </form>
    );
  }
}
