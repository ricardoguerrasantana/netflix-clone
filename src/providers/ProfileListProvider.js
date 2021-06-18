import Debug from 'debug';
const log = Debug('App:ProfileListProvider');
log.log = console.log.bind(console);

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ProfileListContext , SetProfileListContext } from '../contexts';
import { useFirebase } from '../hooks';

function ProfileListProvider({ children , profileList , setProfileList }) {
  log('Rendering...');

  const firebase = useFirebase();

  useEffect(() => {
    log("Mounting profileList observer...");

    const cleanUp = firebase.auth().onAuthStateChanged(function (authUser) {
      log("profileList observer is setting up profileList");
      
      const validProfileList = [];
      if (authUser) {
        log("authUser.providerData" , authUser.providerData)
        const { providerData } = authUser;
        providerData.forEach(profile => {
          if (profile.displayName) {
            validProfileList.push(profile);
          }
        });
      } 
      
      log("validProfileList" , validProfileList)
      if (validProfileList.length > 0) {
        localStorage.setItem('profileList', JSON.stringify(validProfileList));
        setProfileList(validProfileList);
      } else {
        localStorage.removeItem('profileList');
        setProfileList([]);
      }

      log("profileList observer is done.")
    });

    return () => {
      log("Unmounting profileList Observer");
      cleanUp();
    }
  }, []);

  return(
    <ProfileListContext.Provider value={profileList} >
      <SetProfileListContext.Provider value={setProfileList}>
        {children}
      </SetProfileListContext.Provider>
    </ProfileListContext.Provider>
  );
}

ProfileListProvider.propTypes = {
  children: PropTypes.element.isRequired ,
  profileList: PropTypes.arrayOf(PropTypes.object) , 
  setProfileList: PropTypes.func.isRequired , 
};

ProfileListProvider.defaultProps = {
  profileList: [],
}

export default ProfileListProvider;