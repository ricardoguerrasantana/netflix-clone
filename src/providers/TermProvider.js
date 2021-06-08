import Debug from 'debug';
const log = Debug('App:TermProvider');
log.log = console.log.bind(console);

import React from 'react';
import PropTypes from 'prop-types';
import { 
  TermContext , 
  SetTermContext 
} from '../contexts';

function TermProvider({ children , term , setTerm }) {
  log('Rendering...');
  
  return(
    <TermContext.Provider value={term} >
      <SetTermContext.Provider value={setTerm}>
        {children}
      </SetTermContext.Provider>
    </TermContext.Provider>
  );
}

TermProvider.propTypes = {
  children: PropTypes.element.isRequired , 
  setTerm: PropTypes.func.isRequired , 
  term: PropTypes.string , 
};

TermProvider.defaultProps = {
  term: '' , 
}

export default TermProvider;