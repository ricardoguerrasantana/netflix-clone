import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Logo ,
  Button , 
  Container 
} from './styles/bar';

export default function Bar({ children , ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Bar.Button = function BarButton({ to , children , ...restProps }) {
  return (
    <Button href={to} {...restProps}>
      {children}
    </Button>
  );
}

Bar.Logo = function BarLogo({ to , ...restProps }) {
  return (
    <ReactRouterLink to={to}>
        <Logo {...restProps} />
    </ReactRouterLink>
  );
}