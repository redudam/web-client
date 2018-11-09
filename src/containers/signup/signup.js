import React from 'react';

import { Button, FormGroup,  Input,  Alert } from 'reactstrap';
import './signup.css';
import vklogo from './vklogo.png';
import productLogo from '../../logo.png';

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passInputValue: '',
      passConfirmValue: '',
      correctPasswords: true,
    };

    this.onChangePassInput = this.onChangePassInput.bind(this);
    this.onChangePassConfirm = this.onChangePassConfirm.bind(this);
  }

  checkCompareError(inputValue, confirmValue) {
    if (inputValue == confirmValue) return true;
    return false;
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

  render() {
    if (!this.state.correctPasswords) {
    return (
      <React.Fragment>
        <div id="navbar">
          <img alt="productlogo" src={productLogo} />
        </div>
        <form id="signUpForm">
          <h1>Регистрация</h1>
          <FormGroup>
            <Input type="email" name="email" id="emailInput" placeholder="E-mail" />
          </FormGroup>
          <FormGroup>
            <Input type="password" name="passwordInput" id="passwordInput" onChange={this.onChangePassInput} value={this.state.passInputValue} placeholder="Пароль" style = {{marginBottom: '1rem'}}/>
            <Input type="password" name="passwordConfirm" id="passwordConfirm" onChange={this.onChangePassConfirm} value={this.state.passConfirmValue} placeholder="Повторите пароль" style = {{marginBottom: '1rem'}}/>
          </FormGroup>
            <Alert color="danger">
              Пароли не совпадают!
            </Alert>
          <div id="loginContainer">
            <Button type="button" id="goToLogin" color="link">Уже есть аккаунт?</Button>
          </div>
        </form>
        <div id="footer">redundantiam</div>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <div id="navbar">
          <img alt="productlogo" src={productLogo} />
        </div>
        <form id="signUpForm">
          <h1>Регистрация</h1>
          <FormGroup>
            <Input type="email" name="email" id="emailInput" placeholder="E-mail" />
          </FormGroup>
          <FormGroup>
            <Input type="password" name="passwordInput" id="passwordInput" value={this.state.passInputValue} onChange={this.onChangePassInput} placeholder="Пароль" style = {{marginBottom: '1rem'}}/>
            <Input type="password" name="passwordConfirm" id="passwordConfirm" value={this.state.passConfirmValue} onChange={this.onChangePassConfirm} placeholder="Повторите пароль" style = {{marginBottom: '1rem'}}/>
          </FormGroup>
          <Button type="button" color="success" id="signUpDirectly" style = {{marginBottom: '1rem'}}>Регистрация</Button>
          <Button type="button" id="signUpVK">Регистрация через<img alt="vklogo" src={vklogo} id="smallImage" /></Button>
          <div id="loginContainer">
            <Button type="button" id="goToLogin" color="link">Уже есть аккаунт?</Button>
          </div>
        </form>
        <div id="footer">redundantiam</div>
      </React.Fragment>
    );
  }
  }
}
