/* eslint-disable react/jsx-max-depth */
import Debug from 'debug';
const log = Debug('App:Application');
log.log = console.log.bind(console);

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
import { AuthUserProvider, ProfileListProvider } from './providers';

function App() {
  log('Rendering...');
  
  const [authUser, setAuthUser] = useState(() => JSON.parse(localStorage.getItem('authUser')));
  // const [authUser, setAuthUser] = useState(null);
  log('authUser', authUser);
  const [profileList , setProfileList] = useState(() => JSON.parse(localStorage.getItem('profileList')));
  log('profileList', profileList);
  
  return (
    <AuthUserProvider
      authUser={authUser}
      setAuthUser={setAuthUser}
    >
      <ProfileListProvider
        profileList={profileList}
        setProfileList={setProfileList}
      >
        <Router>

          <RedirectRoute
            authPath={ROUTES.BROWSE}
            noAuthPath={ROUTES.HOME}
          >
            <HomePage />
          </RedirectRoute>

          <ProtectedRoute
            authPath={ROUTES.BROWSE}
            noAuthPath={ROUTES.SIGN_IN}
          >
            <BrowsePage />
          </ProtectedRoute>

          <RedirectRoute
            authPath={ROUTES.BROWSE}
            noAuthPath={ROUTES.SIGN_IN}
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
      </ProfileListProvider>
    </AuthUserProvider>
  );
}

export default App;