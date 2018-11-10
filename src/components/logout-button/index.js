import React from 'react';
import { withRouter } from 'react-router-dom';
import { fakeAuth } from '../../auth';
import  './logout-button.css';

export const LogoutButton = withRouter(
    ({ history }) =>
          <button id="logout"
            onClick={() => {
              fakeAuth.signout(() => history.push("/login"));
            }}
          >
            Выход
          </button>
  );