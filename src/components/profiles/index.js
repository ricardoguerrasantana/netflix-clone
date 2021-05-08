import React from 'react';
import { browsePage } from '../../constants/ui-text';
import { 
  Container , 
  List , 
  Name , 
  Picture , 
  Title , 
  Item , 
} from './styles/profiles';

export default function Profiles({ children , ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Profiles.List = function ProfilesList({ children , ...rest }) {
  return <List {...rest}>{children}</List>;
}

Profiles.Name = function ProfilesName({ children , ...rest }) {
  return <Name {...rest}>{children}</Name>;
}

Profiles.Picture = function ProfilesPicture({ src , ...rest }) {
  return <Picture 
    {...rest} 
    src={src ? src : browsePage.defaultProfileImg} 
    />;
}

Profiles.Title = function ProfilesTitle({ children , ...rest }) {
  return <Title {...rest}>{children}</Title>;
}

Profiles.Item = function ProfilesItem({ children , ...rest }) {
  return <Item {...rest}>{children}</Item>;
}