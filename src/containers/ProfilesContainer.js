/* eslint-disable react/jsx-max-depth */
import Debug from "debug";
import React from "react";
import { TopBar } from "../containers"
import { Profiles } from "../components";
import { browsePage } from "../constants/ui-text";
import { useSetProfile , useAuthUser } from "../hooks";

const log = Debug("App:ProfilesContainer");
log.log = console.log.bind(console);

export default function ProfilesContainer() {
  log('Rendering ProfilesContainer...');
  // const firebase = useFirebase();
  // log('firebase',firebase)
  // const user = {};
  const authUser = useAuthUser();
  log('authUser' , authUser);
  const setProfile = useSetProfile();


  // useEffect(() => {
    // setAuthUser(firebase.auth().currentUser || {});
  // });

  function handleClick() {
    setProfile({
      displayName: authUser.displayName,
      photoURL: authUser.photoURL,
    });
  }

  return (
    <>
      <TopBar mode='justLogo' />

      <Profiles>
        <Profiles.Title>
          {browsePage.title}
        </Profiles.Title>

        <Profiles.List>
          <Profiles.Item onClick={handleClick}>
            <Profiles.Picture src={authUser.photoURL} />

            <Profiles.Name>
              {authUser.displayName}
            </Profiles.Name>
          </Profiles.Item>
        </Profiles.List>
      </Profiles>
    </>
  );
}

ProfilesContainer.propTypes = {
  // authUser: PropTypes.objectOf(PropTypes.any).isRequired,
};