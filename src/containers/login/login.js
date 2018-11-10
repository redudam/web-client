import React from 'react';

import { Button, FormGroup, Input } from 'reactstrap';
import './login.css';
import vklogo from './vklogo.png';
import { Link } from 'react-router-dom';
import { Header } from '../../components/header';

import dogLeftEar from '../dog/leftEar.png';
import dogRightEar from '../dog/rightEar.png';
import dogHead from '../dog/head.png';
import dogBody from '../dog/body.png';
import '../dog/dog.css';
import AuthService from '../../AuthService';
import { Alert } from 'reactstrap'; 

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.setEyesClosed = this.setEyesClosed.bind(this);
    this.setEyesOpened = this.setEyesOpened.bind(this);
    this.toInitial = this.toInitial.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.Auth = new AuthService();
    this.state = {
      email: '',
      password: '',
      loginError: false
    };
  }

  login() {
    this.Auth.login(this.state.email, this.state.password)
      .then(() => {
        console.log(123);
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
        this.setState({
          loginError: true
        });
    });
  }

  componentDidMount() {
    console.log('login did mount');
    document.getElementById('leftEar').style.height = '67px';
    document.getElementById('rightEar').style.height = '67px';
    let closedEyes = false;
    let spec = true;
  }

  componentWillUnmount() {
    console.log('will unmount');
  }


  handleEmailChange(event) {
    if (Math.abs(30 - event.target.value.length * 2) < 30) {
      document.getElementById('headContainer').style.transform = 'rotate(' + (30 - event.target.value.length * 2) + 'deg)';
    }
      this.setState({
        email: event.target.value
      });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    })
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

  onDismiss() {
    console.log('onDismiss');
    this.setState({ loginError: false });
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
            <Input type="email" name="email" 
            onChange={this.handleEmailChange} 
            onFocus={this.setEyesOpened}
             id="emailInput"
             value={this.state.email}
              placeholder="E-mail" />
          </FormGroup>
          <FormGroup>
            <Input type="password"
             name="password"
              onChange={this.handlePasswordChange}
               id="passwordInput"
                onFocus={this.setEyesClosed}
                value={this.state.password}
                 placeholder="Пароль" />
          </FormGroup>
          <Alert color="danger"
           isOpen={this.state.loginError}
            toggle={this.onDismiss}>Некорректный логин или пароль.</Alert>
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
