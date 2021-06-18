import Debug from 'debug';
import PropTypes from 'prop-types';
import { AuthUserContext, SetAuthUserContext } from '../contexts';
import React, { useEffect } from 'react';
import { useFirebase } from '../hooks';

const log = Debug('App:AuthUserProvider');
log.log = console.log.bind(console);

function AuthUserProvider({ children, authUser, setAuthUser }) {
  log('Rendering...');

  const firebase = useFirebase();

  useEffect(() => {
    log('Mounting authUser observer...');

    const cleanUp = firebase.auth().onAuthStateChanged(function(authUser) {
      log("authUser observer is setting up authUser");
      log("authUser" , authUser);
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setAuthUser(authUser);
        // localStorage.removeItem('authUser'); setAuthUser(null); // Simulates log out
      } else {
        localStorage.removeItem('authUser');
        setAuthUser(null);
      }
      log("authUser observer is done.");
    });

    return () => {
      log("Unmounting authUser observer...");
      cleanUp();
    };
  }, []);

  return (
    <AuthUserContext.Provider value={authUser} >
      <SetAuthUserContext.Provider value={setAuthUser} >
        {children}
      </SetAuthUserContext.Provider>
    </AuthUserContext.Provider>
  );
}

AuthUserProvider.propTypes = {
  authUser: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.element.isRequired,
  setAuthUser: PropTypes.func.isRequired,
};

AuthUserProvider.defaultProps = {
  authUser: null,
}

export default AuthUserProvider;