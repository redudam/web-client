import React from 'react';

import { Button, FormGroup, Input } from 'reactstrap';
import './login.css';
import vklogo from './vklogo.png';
import { fakeAuth } from '../../auth';
import { Redirect, Link } from 'react-router-dom';
import { Header } from '../../components/header';

import dogLeftEar from '../dog/leftEar.png';
import dogRightEar from '../dog/rightEar.png';
import dogHead from '../dog/head.png';
import dogBody from '../dog/body.png';
import '../dog/dog.css';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {redirectToReferrer: false};
    this.login = this.login.bind(this);

    this.emailChanged = this.emailChanged.bind(this);
    this.setEyesClosed = this.setEyesClosed.bind(this);
    this.setEyesOpened = this.setEyesOpened.bind(this);
    this.toInitial = this.toInitial.bind(this);
  }

  login() {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  }

  componentDidMount() {
    document.getElementById('leftEar').style.height = '67px';
    document.getElementById('rightEar').style.height = '67px';
    let closedEyes = false;
    let spec = true;
  }

  emailChanged(event) {
    if (Math.abs(30 - event.target.value.length * 2) < 30)
      document.getElementById('headContainer').style.transform = 'rotate(' + (30 - event.target.value.length * 2) + 'deg)';
  }

  setEyesOpened(event) {
    if (Math.abs(30 - event.target.value.length * 2) < 30)
      document.getElementById('headContainer').style.transform = 'rotate(' + (30 - event.target.value.length * 2) + 'deg)';
      document.getElementById('leftEar').style.height = '67px';
      document.getElementById('rightEar').style.height = '67px';
      if (this.closedEyes) {
        document.getElementById('leftEar').style.transform = "rotate(0deg)";
        document.getElementById('rightEar').style.transform = "rotate(0deg)";
      }
  }

  setEyesClosed() {
    document.getElementById('leftEar').style.height = '90px';
    document.getElementById('rightEar').style.height = '90px';
    document.getElementById('leftEar').style.transform = "rotate(-15deg)";
    document.getElementById('rightEar').style.transform = "rotate(15deg)";
    this.closedEyes = true;
  }

  toInitial() {
    document.getElementById('leftEar').style.transform = "rotate(0deg)";
    document.getElementById('rightEar').style.transform = "rotate(0deg)";
    document.getElementById('leftEar').style.height = '67px';
    document.getElementById('rightEar').style.height = '67px';
    document.getElementById('headContainer').style.transform = 'rotate(0deg)';
  }

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <React.Fragment>
        <Header></Header>
        <div id="dogContainer" onClick={this.toInitial}>
          <div id="headContainer">
            <img id="leftEar" src={dogLeftEar} alt="res" />
            <img id="rightEar" src={dogRightEar} alt="res" />
            <img id="head" src={dogHead} alt="res" />
          </div>
          <img id="body" src={dogBody} alt="res" />
        </div>
        <form id="loginForm">
          <h1>Вход</h1>
          <FormGroup>
            <Input type="email" name="email" onChange={this.emailChanged} onFocus={this.setEyesOpened} id="emailInput" placeholder="E-mail" />
          </FormGroup>
          <FormGroup>
            <Input type="password" name="password" id="passwordInput" onFocus={this.setEyesClosed} placeholder="Пароль" />
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
