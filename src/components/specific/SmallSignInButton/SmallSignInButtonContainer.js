import Debug from "debug";
const log = Debug('App:SmallSignInButtonContainer');
log.log = console.log.bind(console);

import React , { memo } from 'react';
import { Button } from '../..';
import { buttons } from '../../../constants/ui-text';
import * as ROUTES from '../../../constants/routes';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

function SmallSignInButtonContainer({ type , disabled }) {
  log('Rendering...');
  
  const history = useHistory();
  
  const to = ROUTES.SIGN_IN;
  
  function handleClick() {
    history.push(to);
  }

  return (
    <Button 
      disabled={disabled}
      handleClick={handleClick}
      styles="SmallSignIn"
      text={buttons.signInButtonText} 
      to={to} 
      type={type}
    />
  );
}

SmallSignInButtonContainer.propTypes = {
  disabled: PropTypes.bool ,
  type: PropTypes.string ,
}

SmallSignInButtonContainer.defaultProps = {
  disabled: false , 
  type: ""
}

export default memo(SmallSignInButtonContainer);