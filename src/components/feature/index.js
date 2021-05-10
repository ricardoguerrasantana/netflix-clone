import React from 'react';
import { 
  Container , 
  Button , 
  CallOut , 
  Frame , 
  Inner , 
  Text , 
} from './styles/feature';

export default function Feature({ children , ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Feature.Button = function FeatureButton({ children , ...restProps }) {
  return <Button {...restProps}>{children}</Button>
}

Feature.CallOut = function FeatureCallOut({ children , ...restProps }) {
  return <CallOut {...restProps}>{children}</CallOut>
}

Feature.Inner = function FeatureInner({ 
  children , 
  ...restProps 
}) {
  return <Inner {...restProps}>{children}</Inner>
}

Feature.Frame = function FeatureFrame({ children , ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
}

Feature.Text = function FeatureText({ children , ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}
