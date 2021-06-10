import Debug from "debug";
import React from "react";
import PropTypes from 'prop-types';
import { 
  ProfilesContainer , 
  LoadingProfile, 
  ContentContainer, 
} from "../../containers";

const log = Debug("App:BrowsePage");
log.log = console.log.bind(console);

export function BrowsePage({ loading , setLoading , 
  // authUser , 
  profile , 
  // setProfile 
}) {
  log('Rendering BrowsePage...');
  return (
    profile.displayName ? (
      loading ? 
        <LoadingProfile
          profileAvatarSrc={profile.photoURL}
          setLoading={setLoading}
        /> : 
        <ContentContainer />
    ) : (
      <ProfilesContainer />
    )
  );
}

BrowsePage.propTypes = {
  // authUser: PropTypes.objectOf(PropTypes.any).isRequired ,
  // category: PropTypes.string.isRequired ,
  loading: PropTypes.bool.isRequired ,
  profile: PropTypes.objectOf(PropTypes.any).isRequired ,
  // setCategory: PropTypes.func.isRequired ,
  setLoading: PropTypes.func.isRequired ,
  // setTerm: PropTypes.func.isRequired ,
  // term: PropTypes.string.isRequired ,
}

BrowsePage.defaultProps = {
}