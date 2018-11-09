import React from 'react';
import { withRouter } from 'react-router-dom';
import { fakeAuth } from '../../auth';

export const AuthButton = withRouter(
    ({ history }) =>
      fakeAuth.isAuthenticated && (
        <p>
          Welcome!{" "}
          <button
            onClick={() => {
              fakeAuth.signout(() => history.push("/login"));
            }}
          >
            Sign out
          </button>
        </p>
      )
  );