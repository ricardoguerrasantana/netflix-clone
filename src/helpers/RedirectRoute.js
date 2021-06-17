import Debug from 'debug';
const log = Debug('App:RedirectRoute');
log.log = console.log.bind(console);

import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useProfileList } from '../hooks';

function RedirectRoute({ authPath, children, noAuthPath }) {
  log("Rendering...");

  const profileList = useProfileList();
  log("profileList" , profileList);

  return (
    <Route
      exact
      path={noAuthPath}
    >
      {profileList && profileList.length > 0 ?
        <Redirect
          push
          to={authPath}
        /> : children}
    </Route>
  );
}

RedirectRoute.propTypes = {
  authPath: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  noAuthPath: PropTypes.string.isRequired,
};

export default RedirectRoute;