import Debug from "debug";
const log = Debug('App:ProfileContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';

function ProfileContainer({ handleProfileClick, pictureSrc, profileName }) {
  log('Rendering...');

  return (
    <Profile
      handleProfileClick={handleProfileClick}
      pictureSrc={pictureSrc}
      profileName={profileName}
    />
  );
}

ProfileContainer.propTypes = {
  handleProfileClick: PropTypes.func,
  pictureSrc: PropTypes.string.isRequired,
  profileName: PropTypes.string,
}

ProfileContainer.defaultProps = {
  handleProfileClick: () => { },
  profileName: "",
}

export default memo(ProfileContainer);