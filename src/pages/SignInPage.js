import React from 'react';
import {
  HeaderContainer,
  FooterLinks,
  SignInContainer
} from '../containers';

export default function SignIn() {
  return (
    <>
      <HeaderContainer>
        <SignInContainer />
      </HeaderContainer>

      <FooterLinks />
    </>
  );
}