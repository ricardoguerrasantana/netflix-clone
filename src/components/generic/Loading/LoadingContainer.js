import Debug from "debug";
const log = Debug('App:LoadingContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { global } from "../../../constants/ui-text";

function LoadingContainer({ profileAvatarSrc }) {
  log('Rendering...');

  return (
    <Loading
      profileAvatarSrc={profileAvatarSrc}
      spinnerSrc={global.spinnerImg}
    />
  );
}

LoadingContainer.propTypes = {
  profileAvatarSrc: PropTypes.string,
}

LoadingContainer.defaultProps = {
  profileAvatarSrc: undefined,
}

export default memo(LoadingContainer);