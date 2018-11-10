import React from 'react';

import { Button, FormGroup, Input } from 'reactstrap';
import './createtask.css';
import productLogo from '../../logo.png';

export default class CreateTaskForm extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <React.Fragment>
        <div id="navbar">

        </div>
        <form id="createTaskForm">
          <h1>Создать задачу</h1>
          <FormGroup>
            <Input type="text" name="taskNameInput" id="taskNameInput" placeholder="Название задачи" />
          </FormGroup>
          <FormGroup>
            <Input type="password" name="password" id="passwordInput" placeholder="Пароль" />
          </FormGroup>
          <Button type="button" color="success" onClick={() => this.login()} id="loginDirectly">Вход</Button>

        </form>

      </React.Fragment>
    );
  }
}
