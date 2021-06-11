import Debug from "debug";
const log = Debug("App:BrowsePage");
log.log = console.log.bind(console);

import React from "react";
import PropTypes from 'prop-types';
import {
  ProfileSelection,
  LoadingProfile,
  Content,
} from "../../containers";

function BrowsePage({ loading, setLoading, profile }) {
  log('Rendering BrowsePage...');
  
  return (
    profile.displayName ? (
      loading ?
        <LoadingProfile
          setLoading={setLoading}
        /> :
        <Content />
    ) : (
      <ProfileSelection />
    )
  );
}

BrowsePage.propTypes = {
  loading: PropTypes.bool.isRequired,
  profile: PropTypes.objectOf(PropTypes.any).isRequired,
  setLoading: PropTypes.func.isRequired,
}

export default BrowsePage;