import Debug from 'debug';
const log = Debug('App:FirebaseProvider');
log.log = console.log.bind(console);

import React from 'react';
import PropTypes from 'prop-types';
import { FirebaseContext } from '../contexts';

function FirebaseProvider({ children , firebase }) {
  log('Rendering...');
  
  return(
    <FirebaseContext.Provider value={firebase} >
      {children}
    </FirebaseContext.Provider>
  );
}

FirebaseProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired ,
  firebase: PropTypes.objectOf(PropTypes.any) ,
};

FirebaseProvider.defaultProps = {
  firebase: {} , 
};

export default FirebaseProvider;