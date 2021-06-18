import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { useProfile } from "../../../hooks";
import {
  Logo,
  NavBar,
  SmallSignInButton,
  SearchBar,
  OptionBar,
  ProfileOptions,
} from '../../../components';

import Debug from "debug";
const log = Debug('App:TopBarContainer');
log.log = console.log.bind(console);

function TopBarContainer({ mode }) {
  log('Rendering...');

  const profile = useProfile();

  const displayMode = mode ? mode : profile ? "loggedIn" : "loggedOut";

  const left = (
    <>
      <Logo />

      {
        displayMode === 'loggedIn' ?
          <OptionBar /> : null
      }
    </>
  );

  const right = (
    displayMode === 'loggedOut' ?
      <SmallSignInButton /> :
      displayMode === 'loggedIn' ?
        <>
          <SearchBar />

          <ProfileOptions />
        </>
        : null
  );

  const items = [
    {
      elements: left,
      key: "left"
    },
    {
      elements: right,
      key: "right"
    }
  ];

  return (
    <NavBar
      items={items}
    />
  );
}

TopBarContainer.propTypes = {
  // TopBar accepts only one mode: "justLogo", otherwise the mode is determined by user authorization.
  mode: PropTypes.oneOf(["justLogo"])
}

TopBarContainer.defaultProps = {
  mode: undefined
}

export default memo(TopBarContainer);