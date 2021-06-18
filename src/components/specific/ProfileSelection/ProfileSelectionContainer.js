import Debug from "debug";
const log = Debug('App:ProfileSelectionContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import ProfileSelection from './ProfileSelection';
import { Profile, TopBar } from '../../../components'
import { useProfileList, useSetProfile } from "../../../hooks";
import { browsePage } from "../../../constants/ui-text";

function ProfileSelectionContainer() {
  log('Rendering...');

  const profileList = useProfileList();
  const setProfile = useSetProfile();

  const navBar = (<TopBar mode='justLogo' />);

  const profiles = profileList.map(profile => {

    function handleProfileClick() {
      setProfile(profile);
    }

    const element = (
      <Profile
        handleProfileClick={handleProfileClick}
        pictureSrc={profile.photoURL}
        profileName={profile.displayName}
      />
    );

    return {
      key: profile.displayName,
      element,
    };
  });


  return (
    <ProfileSelection
      navBar={navBar}
      profiles={profiles}
      title={browsePage.title}
    />
  );
}

export default memo(ProfileSelectionContainer);