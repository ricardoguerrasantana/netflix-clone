import React , { memo } from 'react';
import { browsePage } from '../../../constants/ui-text';
import { Link } from './styled-components';
import { DropdownMenu , Icon } from '../../../containers';
import { useProfile , useFirebase } from '../../../hooks';

import Debug from "debug";
const log = Debug('App:ProfileOptionsContainer');
log.log = console.log.bind(console);

function ProfileOptionsContainer() {
  log('Rendering...');

  const profile = useProfile();
  const firebase = useFirebase();
  // console.log('firebase' , firebase);

  function handleSignOutClik() {
    firebase.auth().signOut();
  }
  
  const Profile = (
    <>
      <Icon src={profile.photoURL} />

      <Link>
        {profile.displayName}
      </Link>
    </>
  );

  const SignOut = (
    <Link>
      {browsePage.signOutLink}
    </Link>
  );

  const options = [
    { 
      el: Profile , 
      id: profile.displayName , 
    } , 
    {
      el: SignOut , 
      id: browsePage.signOutLink , 
      handleClick: handleSignOutClik
    }
  ];

  return (
    <DropdownMenu 
      options={options}
      src={profile.photoURL}
    />
  );
}

export default memo(ProfileOptionsContainer);