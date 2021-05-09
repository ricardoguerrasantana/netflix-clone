import React from 'react';
import { 
  Container , 
  CallOut , 
  Frame , 
  Text , 
} from './styles/feature';

export default function Feature({ children , ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Feature.CallOut = function FeatureCallOut({ children , ...restProps }) {
  return <CallOut {...restProps}>{children}</CallOut>
}

Feature.Frame = function FeatureFrame({ children , ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
}

Feature.Text = function FeatureText({ children , ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}
