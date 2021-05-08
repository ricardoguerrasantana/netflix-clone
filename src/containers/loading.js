import Debug from 'debug';
import React , { useEffect } from 'react';
import { Loading } from '../components';

const log = Debug('App:LoadingContainer');
log.log = console.log.bind(console);

export default function LoadingContainer({ setLoading , ...rest }) {

  // Simulates loading profile data
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  return <Loading {...rest} />;
} 
