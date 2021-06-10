import React from 'react';
import PropTypes from 'prop-types';
import { Spinner , Picture } from './styled-components';

function Loading({ profileAvatarSrc , spinnerSrc }) {
  return (
    <Spinner spinnerSrc={spinnerSrc}>
      {profileAvatarSrc ? <Picture src={profileAvatarSrc} /> : null}
    </Spinner>
  );
}

Loading.propTypes = {
  profileAvatarSrc: PropTypes.string ,
  spinnerSrc: PropTypes.string.isRequired ,
}

Loading.defaultProps = {
  profileAvatarSrc: null,
}

export default Loading;