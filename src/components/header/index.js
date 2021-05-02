import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Background ,
  Logo ,
  ButtonLink , 
  Container ,
  Text
} from './styles/header';

export default function Header({ bg = true , children , ...restProps }) {
  return bg ? (
    <Background {...restProps}>
      {children}
    </Background>
  ) : children;
}

Header.Frame = function HeaderFrame({ children , ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.ButtonLink = function HeaderButtonLink({ to , children , ...restProps }) {
  return (
    <ButtonLink href={to} {...restProps}>
      {children}
    </ButtonLink>
  );
}

Header.Logo = function HeaderLogo({ to , ...restProps }) {
  return (
    <ReactRouterLink >
      <Logo href={to} {...restProps} />
    </ReactRouterLink>
  );
}