import Debug from "debug";
const log = Debug('App:LargeSignInButtonContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import { Button } from '../..';
import { buttons } from '../../../constants/ui-text';
import * as ROUTES from '../../../constants/routes';
import PropTypes from 'prop-types';

function LargeSignInButtonContainer({ type, disabled }) {
  log('Rendering...');

  return (
    <Button
      disabled={disabled}
      styles="LargeSignIn"
      text={buttons.signInButtonText}
      to={ROUTES.SIGN_IN}
      type={type}
    />
  );
}

LargeSignInButtonContainer.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string,
}

LargeSignInButtonContainer.defaultProps = {
  disabled: false,
  type: ""
}

export default memo(LargeSignInButtonContainer);