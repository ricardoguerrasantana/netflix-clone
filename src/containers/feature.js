import React from 'react';
import { Feature } from '../components';

export function FeatureContainer({ ...restProps }) {
  return (
    <Feature {...restProps}></Feature>
  );
}