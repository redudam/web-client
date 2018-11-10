import React from 'react';
import { Header } from '../../components/header';

import './profile.css';
import userAvatar from '../../logo.png';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <React.Fragment>
        <Header inProfile></Header>
          <div id="profileContainer">
            <img src = {userAvatar} alt="Пользователь" id="profileAvatar" />
          </div>
        <div id="footer">redundantiam</div>
      </React.Fragment>
    );
  }
}
