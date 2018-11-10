import React from 'react';
import { withRouter } from 'react-router-dom';
import AuthService from '../../AuthService';
import  './logout-button.css';

const Auth = new AuthService();

export const LogoutButton = withRouter(
    ({ history }) =>
          <button id="logout"
            onClick={() => {
              Auth.logout();
              console.log('logging out from logout component');
              history.replace("/login");
            }}
          >
            Выход
          </button>
  );