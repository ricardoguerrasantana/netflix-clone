import Debug from "debug";
const log = Debug('App:LoadingProfileContainer');
log.log = console.log.bind(console);

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Loading } from "../../../containers";

function LoadingProfileContainer({ setLoading , profileAvatarSrc }) {
  log('Rendering...');

  // Simulates loading profile data
  useEffect(() => {
    log("Mounting timeOut");
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      log("Clean up timeOut");
      clearTimeout(timeOut)
    };
  }, []);

  return (
    <Loading profileAvatarSrc={profileAvatarSrc} />
  );
}

LoadingProfileContainer.propTypes = {
  profileAvatarSrc: PropTypes.string.isRequired ,
  setLoading: PropTypes.func.isRequired,
}

export default memo(LoadingProfileContainer);