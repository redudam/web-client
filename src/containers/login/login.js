import React from 'react';
import ReactDOM from 'react-dom';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './login.css';
import vklogo from './vklogo.png';

export default class LoginForm extends React.Component {
  render() {
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
        <Button type="button" color="success" id="loginDirectly">Вход</Button>
        <Button type="button" id="loginVK">Вход через<img src={vklogo} id="smallImage" /></Button>
        <Button color="link">Нет аккаунта?</Button>
      </form>
    );
  }
}
