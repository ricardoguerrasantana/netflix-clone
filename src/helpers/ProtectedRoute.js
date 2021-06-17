import Debug from 'debug';
const log = Debug('App:ProtectedRoute');
log.log = console.log.bind(console);

import PropTypes from 'prop-types';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useProfileList } from '../hooks';

function ProtectedRoute({ noAuthPath, children, authPath }) {
  log("Rendering...");

  const profileList = useProfileList();
  log("profileList" , profileList);

  return (
    <Route
      exact
      path={authPath}
    >
      {(profileList && profileList.length === 0) ?
        <Redirect
          push
          to={noAuthPath}
        /> : children}
    </Route>
  );
}

ProtectedRoute.propTypes = {
  authPath: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  noAuthPath: PropTypes.string.isRequired,
}

export default ProtectedRoute;