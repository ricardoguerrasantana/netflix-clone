import React from 'react';

import {
  Container ,
  Break , 
  Button , 
  Capsule , 
  Input , 
  Text ,
  Title , 
  SubTitle ,
} from '../styles/OptFormStyles';

export default function OptForm({ children , ...restProps }) {
  return (
    <Container {...restProps}>{children}</Container>
  );  
}

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Break = function OptFormBreak({ children, ...restProps }) {
  return <Break {...restProps} />;
};

OptForm.Capsule = function OptFormCapsule({ children, ...restProps }) {
  return <Capsule {...restProps} >{children}</Capsule>;
};

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Title = function OptFormTitle({ children , ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

OptForm.SubTitle = function OptFormSubTitle({ children , ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>
}