import Debug from "debug";
const log = Debug('App:SignUpFeatureContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import { BasicFeature, SignUpForm } from "../..";

function SignUpFeatureContainer() {
  log('Rendering...');

  return (
    <BasicFeature>
      <SignUpForm />
    </BasicFeature>
  );
}

export default memo(SignUpFeatureContainer);