import React from 'react';
import { Header } from '../../components/header';
import { Progress, Button, Input, FormGroup } from 'reactstrap';

import './profile.css';
import withAuth from '../withAuth';

import userAvatar from '../../logo.png';
import tel from './tel.png';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.oldPassChange = this.oldPassChange.bind(this);
    this.newPassChange = this.newPassChange.bind(this);
    this.state = {
      newPass: '',
      oldPass: ''
    };
  }


  oldPassChange() {

  }

  newPassChange() {

  }

  render() {
    return (
      <React.Fragment>
<<<<<<< HEAD
        <Header inProfile></Header>
          <div style={{margin: 20, marginBottom: 0}}>
            <h1 style={{display: 'inline-block'}}>Профиль</h1><div id="profileRole">Admin</div>
          </div>
=======
        <Header></Header>
>>>>>>> a295be8642a07e5993afc5a948b4be0c3de779d7
          <div id="profileContainer">
            <img src = {userAvatar} alt="Пользователь" id="profileAvatar" />
            <div id="profileName">Юрийkhjhhjgh Соловьев</div>

            <div id="telephone">
              <img src={tel} style={{width: 20, marginRight: 4}} alt="Позвонить" /><a id="tel" href="tel:+78005553535">+78005553535</a>
            </div>
          </div>
          <div id="howManyTasks">
            <span>Статистика</span> <br />
            <span style={{fontWeight: 'bold'}}>
              <span style = {{color: '#17A2B8'}}>всего</span>/
              <span style = {{color: '#28A745'}}>выполнено</span>/
              <span style = {{color: '#FFC107'}}>текущие</span>

            </span>
            <Progress style={{marginTop: 10}} multi>
              <Progress bar color="info" value="56" />
              <Progress bar color="success" value="32" />
              <Progress bar color="warning" value="12" />
            </Progress>
            <div id = "amount">
              <div className="cat" style={{width: '56%'}}>56</div>
              <div className="cat" style={{width: '32%'}}>32</div>
              <div className="cat" style={{width: '12%'}}>12</div>
            </div>
          </div>

          <form id="chPass">
            <FormGroup>
            <Input style={{marginBottom: 16}} type="password"
             name="oldPassword"
              onChange={this.newPassChange}
               id="profileNewPasswordInput"
                value={this.state.newPass}
                 placeholder="Старый пароль" />
               <Input style={{marginBottom: 16}} type="password"
              name="newPassword"
                onChange={this.oldPassChange}
                  id="profileOldPasswordInput"
                     value={this.state.newPass}
                      placeholder="Новый пароль" />


                    <Button type="button" style={{width: '100%'}} color="danger" id="loginDirectly">Сменить пароль</Button>
            </FormGroup>
          </form>



        <div id="footer2">redundantiam</div>
      </React.Fragment>
    );
  }
}
export default withAuth(Profile);
