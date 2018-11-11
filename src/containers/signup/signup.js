import React from 'react';

import { Button, FormGroup,  Input,  Alert } from 'reactstrap';
import './signup.css';
import vklogo from './vklogo.png';
import { Link } from 'react-router-dom';
import { Header } from '../../components/header';
import AuthService from '../../AuthService';

import dogLeftEar from '../dog/leftEar.png';
import dogRightEar from '../dog/rightEar.png';
import dogHead from '../dog/head.png';
import dogBody from '../dog/body.png';
import '../dog/dog.css';

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passInputValue: '',
      passConfirmValue: '',
      correctPasswords: true,
      email: '',
      registrationError: false
    };
    this.Auth = new AuthService();

    this.onChangePassInput = this.onChangePassInput.bind(this);
    this.onChangePassConfirm = this.onChangePassConfirm.bind(this);
    this.setEyesClosed = this.setEyesClosed.bind(this);
    this.setEyesOpened = this.setEyesOpened.bind(this);
    this.toInitial = this.toInitial.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  checkCompareError(inputValue, confirmValue) {
    return (inputValue === confirmValue);
  }

  onDismiss() {
    this.setState({ registrationError: false });
  }

  onChangePassInput(event) {
    this.setState({
      passInputValue: event.target.value,
      correctPasswords: this.checkCompareError(event.target.value, this.state.passConfirmValue),
    });
  }

  onChangePassConfirm(event) {
    this.setState({
      passConfirmValue: event.target.value,
      correctPasswords: this.checkCompareError(this.state.passInputValue, event.target.value),
    });
  }


  componentDidMount() {
    document.getElementById('leftEar').style.height = '67px';
    document.getElementById('rightEar').style.height = '67px';
    let closedEyes = false;
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

  handleEmailChange(e) {
    if (Math.abs(30 - e.target.value.length * 2) < 30)
      document.getElementById('headContainer').style.transform = 'rotate(' + (30 - e.target.value.length * 2) + 'deg)';
    this.setState({
      email: e.target.value
    });
  }

  registerUser() {
    const inviteToken = this.props.match
      &&  this.props.match.params
      && this.props.match.params.inviteToken;

    this.Auth.registerUser(this.state.email, this.state.passInputValue, inviteToken)
      .then(() => {
        this.props.history.push('/');
      })
      .catch(err => {
        this.setState({
          registrationError: true
        });
      });
    }

  render() {
    return (
      <div>
        <Header></Header>
          <div id="dogContainer" onClick={this.toInitial}>
            <div id="headContainer">
              <img id="leftEar" src={dogLeftEar} alt="res" />
              <img id="rightEar" src={dogRightEar} alt="res" />
              <img id="head" src={dogHead} alt="res" />
            </div>
            <img id="body" src={dogBody} alt="res" />
          </div>
        <form id="signUpForm">
          <h1>Регистрация</h1>
          <FormGroup>
            <Input type="email"
             name="email"
             onChange={this.handleEmailChange}
             value={this.state.email}
              id="emailInput" placeholder="E-mail"
              onFocus={this.setEyesOpened} />
          </FormGroup>
          <FormGroup>
            <Input type="password" name="passwordInput"
            id="passwordInput" onFocus={this.setEyesClosed}
            onChange={this.onChangePassInput} value={this.state.passInputValue} placeholder="Пароль" style = {{marginBottom: '1rem'}}/>
            <Input type="password" onFocus={this.setEyesClosed} name="passwordConfirm" id="passwordConfirm" onChange={this.onChangePassConfirm} value={this.state.passConfirmValue} placeholder="Повторите пароль" style = {{marginBottom: '1rem'}}/>
          </FormGroup>
          { this.state.correctPasswords
          ? <div>
            <Button type="button" color="success"
              id="signUpDirectly"
              style = {{marginBottom: '1rem'}} onClick={this.registerUser}>Регистрация</Button>
            <Button type="button"
               id="signUpVK">Регистрация через<img alt="vklogo" src={vklogo} id="smallImage" /></Button>
               </div>
          : <Alert color="danger">
          Пароли не совпадают!
        </Alert> }
        <Alert color="danger"
           isOpen={this.state.registrationError}
            toggle={this.onDismiss}>Ошибка регистрации.</Alert>
          <div id="loginContainer">
            <div id="goToLogin">
              <Link to='/login'>Уже есть аккаунт?</Link>
            </div>
          </div>
        </form>
        <div id="footer2">redundantiam</div>
      </div>
    );
  }
}
