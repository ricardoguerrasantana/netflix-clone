import React from 'react';
import {
  FaqsContainer,
  MainContainer,
  FooterLinks,
  HeaderContainer,
  JumbotronContainer
} from '../containers';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <MainContainer />
      </HeaderContainer>

      <JumbotronContainer />

      <FaqsContainer />

      <FooterLinks />
    </>
  );
}