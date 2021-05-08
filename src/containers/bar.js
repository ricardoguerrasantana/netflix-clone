import React from 'react';
import { Bar } from '../components';
import * as ROUTES from '../constants/routes';

export default function BarContainer() {
  return (
    <Bar>
        <Bar.Logo />
        <Bar.Button to={ROUTES.SIGN_IN}>Sign In</Bar.Button>
    </Bar>
  );
}