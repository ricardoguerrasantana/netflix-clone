import React from 'react';
import { 
  FaqsContainer , 
  FeatureContainer, 
  FooterContainer , 
  HeaderContainer , 
  JumbotronContainer 
} from '../containers';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <FeatureContainer />
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}