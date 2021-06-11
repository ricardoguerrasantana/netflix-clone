import React from 'react';
import {
  FaqsContainer,
  // MainContainer,
  FooterLinks,
  // HeaderContainer,
  JumbotronContainer,
  FeaturedHome
} from '../containers';

export default function Home() {
  return (
    <>
      <FeaturedHome />

      {/* <HeaderContainer>
        <MainContainer />
      </HeaderContainer> */}

      <JumbotronContainer />

      <FaqsContainer />

      <FooterLinks />
    </>
  );
}