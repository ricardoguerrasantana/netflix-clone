/* eslint-disable react/jsx-max-depth */
import Debug from 'debug';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  HomePage,
  BrowsePage,
  SignInPage,
  SignUpPage
} from './pages';
import * as ROUTES from './constants/routes';
import { RedirectRoute, ProtectedRoute } from './helpers';
import { AuthUserProvider } from './providers';

const log = Debug('App:Application');
log.log = console.log.bind(console);

export default function App() {
  log('Rendering...');

  const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('authUser')));
  // log('authUser', authUser);

  return (
    <AuthUserProvider
      authUser={authUser}
      setAuthUser={setAuthUser}
    >
      <Router>

        <RedirectRoute
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
        >
          <HomePage />
        </RedirectRoute>

        <ProtectedRoute
          loggedInPath={ROUTES.SIGN_IN}
          path={ROUTES.BROWSE}
        >
          <BrowsePage />
        </ProtectedRoute>

        <RedirectRoute
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
        >
          <SignInPage />
        </RedirectRoute>

        <Route
          exact
          path={ROUTES.SIGN_UP}
        >
          <SignUpPage />
        </Route>

      </Router>
    </AuthUserProvider>
  );
}
