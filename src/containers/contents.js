import React from 'react';
import { 
  Bar,
  Contents , 
  Feature , 
  Header , 
} from '../components';
import { browsePage } from '../constants/ui-text';

export default function ContentsContainer({ children , ...rest }) {
  return (
    <Header src={browsePage.browseBg}>
      <Bar>
        <Bar.Logo></Bar.Logo>
      </Bar>
      <Feature>
        <Feature.CallOut>{browsePage.callOut}</Feature.CallOut>
        <Feature.Text>{browsePage.description}</Feature.Text>
      </Feature>
    </Header>
  );
} 
