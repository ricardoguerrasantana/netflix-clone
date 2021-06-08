import React from 'react';
import { 
  Container , 
  Button , 
  CallOut , 
  Frame , 
  Inner , 
  Text , 
} from '../styles/FeatureStyles';

export default function Feature({ children }) {
  return <Container >{children}</Container>;
}

Feature.Button = function FeatureButton({ children }) {
  return <Button >{children}</Button>
}

Feature.CallOut = function FeatureCallOut({ children  }) {
  return <CallOut >{children}</CallOut>
}

Feature.Inner = function FeatureInner({ children , term }) {
  return <Inner term={term}>{children}</Inner>
}

Feature.Frame = function FeatureFrame({ children  }) {
  return <Frame >{children}</Frame>
}

Feature.Text = function FeatureText({ children  }) {
  return <Text >{children}</Text>
}
