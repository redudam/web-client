import React from 'react';

import { Button, FormGroup, Input } from 'reactstrap';
import './login.css';
import vklogo from './vklogo.png';
import productLogo from '../../logo.png';

export default class LoginForm extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="navbar">
          <img alt="productlogo" src={productLogo} />
        </div>
        <form id="loginForm">
          <h1>Вход</h1>
          <FormGroup>
            <Input type="email" name="email" id="emailInput" placeholder="E-mail" />
          </FormGroup>
          <FormGroup>
            <Input type="password" name="password" id="passwordInput" placeholder="Пароль" />
          </FormGroup>
          <Button type="button" color="success" id="loginDirectly">Вход</Button>
          <Button type="button" id="loginVK">Вход через<img alt="vklogo" src={vklogo} id="smallImage" /></Button>
          <div id="signUpContainer">
            <Button type="button" id="goToSignUp" color="link">Нет аккаунта?</Button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
