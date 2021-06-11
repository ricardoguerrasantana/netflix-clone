import Debug from "debug";
const log = Debug('App:LoadingProfileContainer');
log.log = console.log.bind(console);

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Loading } from "../../../containers";
import { useProfile } from "../../../hooks";

function LoadingProfileContainer({ setLoading }) {
  log('Rendering...');
  
  const profile = useProfile();

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

  return (
    <Loading profileAvatarSrc={profile.photoURL} />
  );
}

LoadingProfileContainer.propTypes = {
  setLoading: PropTypes.func.isRequired,
}

export default memo(LoadingProfileContainer);