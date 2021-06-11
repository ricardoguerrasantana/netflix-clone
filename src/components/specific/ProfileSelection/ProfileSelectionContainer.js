import Debug from "debug";
const log = Debug('App:ProfileSelectionContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import ProfileSelection from './ProfileSelection';
import { Profile, TopBar } from "../../../containers"
import { useAuthUser, useSetProfile } from "../../../hooks";
import { browsePage } from "../../../constants/ui-text";

function ProfileSelectionContainer() {
  log('Rendering...');

  const user = useAuthUser();
  const setProfile = useSetProfile();

  function handleProfileClick() {
    setProfile({
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
  }

  const element = (
    <Profile
      handleProfileClick={handleProfileClick}
      pictureSrc={user.photoURL}
      profileName={user.displayName}
    />
  );

  const profiles = [
    {
      key: user.displayName,
      element,
    }
  ];

  const navBar = (<TopBar mode='justLogo' />);

  return (
    <ProfileSelection
      navBar={navBar}
      profiles={profiles}
      title={browsePage.title}
    />
  );
}

ProfileSelectionContainer.propTypes = {
}

ProfileSelectionContainer.defaultProps = {
}

export default memo(ProfileSelectionContainer);