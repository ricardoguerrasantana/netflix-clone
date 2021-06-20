import Debug from "debug";
const log = Debug('App:SignInFeatureContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import { BasicFeature, SignInForm } from '../../../components';

function SignInFeatureContainer() {
  log('Rendering...');

  return (
    <BasicFeature>
      <SignInForm />
    </BasicFeature>
  );
}

export default memo(SignInFeatureContainer);