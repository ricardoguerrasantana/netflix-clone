import React from 'react';
import {
  Spinner , 
  Picture , 
} from './styles/loading';

export default function Loading({ src , ...rest }) {
  return (
    <Spinner {...rest}>
      <Picture src={src} />
    </Spinner>
  );
}