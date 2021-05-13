import React from 'react';
import {
  Container , 
  Title , 
} from './styles/content';

export default function Content({ children , ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Content.Title = function ContentsTitle({ children , ...rest }) {
  return <Title {...rest}>{children}</Title>;
}