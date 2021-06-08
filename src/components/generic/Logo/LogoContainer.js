import React , { memo } from 'react';
import Logo from './Logo';
import * as ROUTES from '../../../constants/routes';
import { global } from '../../../constants/ui-text';
import logo from '../../../logo.svg';

import Debug from "debug";
const log = Debug('App:LogoContainer');
log.log = console.log.bind(console);

function LogoContainer() {
  log('Rendering...');
  return (
    <Logo
      alt={global.company}
      src={logo}
      to={ROUTES.HOME}
    />
  );
}

export default memo(LogoContainer);