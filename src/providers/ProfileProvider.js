import Debug from 'debug';
const log = Debug('App:ProfileProvider');
log.log = console.log.bind(console);

import React from 'react';
import PropTypes from 'prop-types';
import { ProfileContext , SetProfileContext } from '../contexts';

function ProfileProvider({ children , profile , setProfile}) {
  log('Rendering...');

  return(
    <ProfileContext.Provider value={profile} >
      <SetProfileContext.Provider value={setProfile}>
        {children}
      </SetProfileContext.Provider>
    </ProfileContext.Provider>
  );
}

ProfileProvider.propTypes = {
  children: PropTypes.element.isRequired ,
  profile: PropTypes.objectOf(PropTypes.any) , 
  setProfile: PropTypes.func.isRequired , 
};

ProfileProvider.defaultProps = {
  profile: {}
}

export default ProfileProvider;