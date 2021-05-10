import Debug from 'debug';
import React from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import { 
  Home , 
  Browse , 
  SignIn , 
  SignUp 
} from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

const log = Debug('App:Application');
log.log = console.log.bind(console);

export default function App() {
  // const user = {};
  const { user } = useAuthListener(); // Read operation
  // const user = null;
  log('user' , user);

  return (
    <Router>
      <IsUserRedirect
        user={user} 
        exact path={ROUTES.HOME}
        loggedInPath={ROUTES.BROWSE}
        >
        <Home />
      </IsUserRedirect>
      <ProtectedRoute
       user={user} 
       exact path={ROUTES.BROWSE}
       loggedInPath={ROUTES.SIGN_IN}
      >
        <Browse />
      </ProtectedRoute>
      <IsUserRedirect
        user={user} 
        exact path={ROUTES.SIGN_IN}
        loggedInPath={ROUTES.BROWSE}
      >
        <SignIn />
      </IsUserRedirect>
      <Route exact path={ROUTES.SIGN_UP}>
        <SignUp />
      </Route>
    </Router>
  );
}
