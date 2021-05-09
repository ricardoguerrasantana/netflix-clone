import React from 'react';
import {
  Container , 
  Title , 
} from './styles/contents';

export default function Contents({ children , ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Contents.Title = function ContentsTitle({ children , ...rest }) {
  return <Title {...rest}>{children}</Title>;
}