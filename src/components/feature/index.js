import React from 'react';
import { 
  Title , 
  SubTitle ,
  Container
} from './styles/feature';

export default function Feature({ children , ...restProps }) {
  return (
    <Container {...restProps}>{children}</Container>
  );
}

Feature.SubTitle = function FeatureSubTitle({ children , ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>
}

Feature.Title = function FeatureTitle({ children , ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}