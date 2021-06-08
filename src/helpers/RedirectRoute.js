import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useAuthUser } from '../hooks';

function RedirectRoute({ loggedInPath , children , path }) {
  const authUser = useAuthUser();

  if (!authUser) {
    return (
      <Route
        exact
        path={path}
      >
        {children}
      </Route>
    );
  }

  if (authUser) {
    return (
      <Route
        exact
        path={path}
      >
        <Redirect
          push 
          to={loggedInPath}
        />
      </Route>
    );
  }

  return null;
}

RedirectRoute.propTypes = {
  children: PropTypes.element.isRequired ,
  loggedInPath: PropTypes.string.isRequired , 
  path: PropTypes.string.isRequired , 
};

RedirectRoute.defaultProps = {
};

export default RedirectRoute;