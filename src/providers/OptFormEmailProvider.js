import Debug from 'debug';
const log = Debug('App:OptFormEmailProvider');
log.log = console.log.bind(console);

import React from 'react';
import PropTypes from 'prop-types';
import { 
  OptFormEmailContext , 
  SetOptFormEmailContext 
} from '../contexts';

function OptFormEmailProvider({ children , optFormEmail , setOptFormEmail }) {
  log('Rendering...');
  
  return(
    <OptFormEmailContext.Provider value={optFormEmail} >
      <SetOptFormEmailContext.Provider value={setOptFormEmail}>
        {children}
      </SetOptFormEmailContext.Provider>
    </OptFormEmailContext.Provider>
  );
}

OptFormEmailProvider.propTypes = {
  children: PropTypes.element.isRequired , 
  optFormEmail: PropTypes.string , 
  setOptFormEmail: PropTypes.func.isRequired , 
};

OptFormEmailProvider.defaultProps = {
  optFormEmail: '' , 
}

export default OptFormEmailProvider;