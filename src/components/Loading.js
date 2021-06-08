import Debug from 'debug';
import React from 'react';
import {
  Spinner , 
  Picture , 
} from '../styles/LoadingStyles';

const log = Debug('App:LoadingContainer');
log.log = console.log.bind(console);

export default function Loading({ src }) {
  log('Rendering Loading...');
  return (
    <Spinner>
      <Picture src={src} />
    </Spinner>
  );
}