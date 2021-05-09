import React from 'react';
import { Feature } from '../components';
import { OptFormContainer  } from '.';

export default function MainContainer() {
  return (
    <Feature.Frame>
      <Feature>
        <OptFormContainer 
          hText={false} 
          hTitle={false} 
          hSubTitle={false}
        />
      </Feature>
    </Feature.Frame>
  );
}