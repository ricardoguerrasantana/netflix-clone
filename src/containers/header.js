import React from 'react';
import { Header , Feature , OptForm } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg'; 

export function HeaderContainer() {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      <Feature>
        <Feature.Title>
          Unlimited films, TV programmes and more.
        </Feature.Title>
        <Feature.SubTitle>
          Watch anywhere. Cancel at any time.
        </Feature.SubTitle>
        <OptForm>
          <OptForm.Input placeholder="Email address"></OptForm.Input>
          <OptForm.Button>Try it now</OptForm.Button>
          <OptForm.Break />
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your membership
          </OptForm.Text>
        </OptForm>
      </Feature>
    </Header>
  );
}