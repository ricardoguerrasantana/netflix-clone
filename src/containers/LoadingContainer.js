import Debug from 'debug';
import PropTypes from 'prop-types';
import React , { useEffect } from 'react';
import { Loading } from '../components';

const log = Debug('App:LoadingContainer');
log.log = console.log.bind(console);

export default function LoadingContainer({ setLoading , src }) {
  log('Rendering...');
  // Simulates loading profile data
  useEffect(() => {
    log("Mounting timeOut");
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => {
      log("Clean up timeOut");
      clearTimeout(timeOut)
    };
  }, []);

  return <Loading src={src} />;
} 

LoadingContainer.propTypes = {
  setLoading: PropTypes.func.isRequired , 
  src: PropTypes.string.isRequired
}