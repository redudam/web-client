import React from 'react';
import { withRouter } from 'react-router-dom';
import { fakeAuth } from '../../auth';

export const LogoutButton = withRouter(
    ({ history }) =>
          <button
            onClick={() => {
              fakeAuth.signout(() => history.push("/login"));
            }}
          >
            Выход
          </button>
  );