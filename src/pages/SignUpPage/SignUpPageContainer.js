import Debug from "debug";
const log = Debug('App:SignUpPageContainer');
log.log = console.log.bind(console);

import React , { memo } from 'react';
import {
  FooterLinks,
  SignUpFeature
} from '../../components';

function SignUpPageContainer() {
  log('Rendering...');

  return (
    <>
      <SignUpFeature />

      <FooterLinks />
    </>
  );
}

export default memo(SignUpPageContainer);