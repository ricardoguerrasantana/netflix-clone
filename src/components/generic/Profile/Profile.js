import React from 'react';
import PropTypes from 'prop-types';
import { Container, Name, Picture } from './styled-components';

function Profile({ handleProfileClick, pictureSrc, profileName }) {
  return (
    <Container onClick={handleProfileClick}>
      <Picture src={pictureSrc} />

      <Name>
        {profileName}
      </Name>
    </Container>
  );
}

Profile.propTypes = {
  handleProfileClick: PropTypes.func.isRequired,
  pictureSrc: PropTypes.string.isRequired,
  profileName: PropTypes.string.isRequired,
}

export default Profile;