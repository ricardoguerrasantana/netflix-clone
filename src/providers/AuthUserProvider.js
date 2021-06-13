import Debug from 'debug';
import PropTypes from 'prop-types';
import { AuthUserContext } from '../contexts';
import { useFirebase } from '../hooks';
import React , { useEffect } from 'react';

const log = Debug('App:AuthUserProvider');
log.log = console.log.bind(console);

function AuthUserProvider({ children , authUser , setAuthUser }) {
  log('Rendering...');
  
  const firebase = useFirebase();

  useEffect(() => {
    log('Setting observer...');
    
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        localStorage.setItem('authUser' , JSON.stringify(user));
        setAuthUser(user);
        // localStorage.removeItem('authUser'); setAuthUser(null); // Simulates log out
      } else {
        localStorage.removeItem('authUser');
        setAuthUser(null);
      }
    });

  } , []);


  return(
    <AuthUserContext.Provider value={authUser} >
      {children}
    </AuthUserContext.Provider>
  );
}

AuthUserProvider.propTypes = {
  authUser: PropTypes.objectOf(PropTypes.any) ,
  children: PropTypes.element.isRequired ,
  setAuthUser: PropTypes.func.isRequired ,
};

AuthUserProvider.defaultProps = {
  authUser: undefined , 
}

export default AuthUserProvider;