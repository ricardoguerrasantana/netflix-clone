import React from 'react';
import { 
  Model , 
} from '../components';

export default function ModelContainer({ children , ...rest }) {
  return <Model {...rest}>{children}</Model>;
} 
