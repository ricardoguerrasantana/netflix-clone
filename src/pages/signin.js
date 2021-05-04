import React from 'react';
import { 
  HeaderContainer , 
  FooterContainer, 
  SignInContainer
} from '../containers';

export default function SignIn() {
  return (
    <>
      <HeaderContainer>
        <SignInContainer />
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}