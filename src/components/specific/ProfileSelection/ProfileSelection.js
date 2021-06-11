import React from 'react';
import PropTypes from 'prop-types';
import { Container, LItem, Title, UList } from './styled-components';

function ProfileSelection({ navBar, profiles, title }) {
  return (
    <>
      {navBar}

      <Container>
        <Title>
          {title}
        </Title>

        <UList>
          {profiles.map(profile => {
            return (
              <LItem key={profile.key} >
                {profile.element}
              </LItem>
            );
          })}

        </UList>
      </Container>
    </>
  );
}

ProfileSelection.propTypes = {
  navBar: PropTypes.element,
  profiles: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    element: PropTypes.element.isRequired,
  })).isRequired,
  title: PropTypes.string.isRequired,
}

ProfileSelection.defaultProps = {
  navBar: null
}

export default ProfileSelection;