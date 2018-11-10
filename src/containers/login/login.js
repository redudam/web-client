import React from 'react';

import { Button, FormGroup, Input } from 'reactstrap';
import './login.css';
import vklogo from './vklogo.png';
import { fakeAuth } from '../../auth';
import { Redirect, Link } from 'react-router-dom';
import productLogo from '../../logo.png';

import SideMenu from '../../components/sidemenu';

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
      <React.Fragment>

        <div id="navbar">
          <img alt="productlogo" id="productLogo" onClick={this.openBurger} src={productLogo} />

        </div>
        <SideMenu source={productLogo}></SideMenu>
        <form id="loginForm">
          <h1>Вход</h1>
          <FormGroup>
            <Input type="email" name="email" id="emailInput" placeholder="E-mail" />
          </FormGroup>
          <FormGroup>
            <Input type="password" name="password" id="passwordInput" placeholder="Пароль" />
          </FormGroup>
          <Button type="button" color="success" onClick={() => this.login()} id="loginDirectly">Вход</Button>
          <Button type="button" id="loginVK">Вход через<img alt="vklogo" src={vklogo} id="smallImage" /></Button>
          <div id="signUpContainer">
            <Link to='/signup'>Нет аккаунта?</Link>
          </div>
        </form>
        <div id="footer">redundantiam</div>
      </React.Fragment>
    );
  }
}
