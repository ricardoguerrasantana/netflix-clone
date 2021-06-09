import Debug from "debug";
const log = Debug('App:LargeSignUpButtonContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import { Button } from '../../../containers';
import { buttons } from '../../../constants/ui-text';
import * as ROUTES from '../../../constants/routes';
import PropTypes from 'prop-types';

function LargeSignUpButtonContainer({ type, disabled }) {
  log('Rendering...');

  return (
    <Button
      disabled={disabled}
      styles="LargeSignUp"
      text={buttons.signUpButtonText}
      to={ROUTES.SIGN_UP}
      type={type}
    />
  );
}

LargeSignUpButtonContainer.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string,
}

LargeSignUpButtonContainer.defaultProps = {
  disabled: false,
  type: ""
}

export default memo(LargeSignUpButtonContainer);