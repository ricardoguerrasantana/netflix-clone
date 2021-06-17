import React from "react";
import PropTypes from 'prop-types';
import {
  ProfileSelection,
  LoadingProfile,
  Content,
} from "../../components";

function BrowsePage({ loading, setLoading, profile }) {
  
  return (
    profile ? (
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
  profile: PropTypes.objectOf(PropTypes.any),
  setLoading: PropTypes.func.isRequired,
}

BrowsePage.defaultProps = {
  profile: null
}

export default BrowsePage;