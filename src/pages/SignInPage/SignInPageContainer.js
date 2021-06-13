import Debug from "debug";
const log = Debug('App:SignInPageContainer');
log.log = console.log.bind(console);

import React , { memo } from 'react';
import {
  FooterLinks,
  SignInFeature
} from '../../components';

function SignInPageContainer() {
  log('Rendering...');

  return (
    <>
      <SignInFeature />

      <FooterLinks />
    </>
  );
}

export default memo(SignInPageContainer);