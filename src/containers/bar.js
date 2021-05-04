import React from 'react';
import { Bar } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export default function BarContainer() {
  return (
    <Bar>
        <Bar.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
        <Bar.Button to={ROUTES.SIGN_IN}>Sign In</Bar.Button>
    </Bar>
  );
}