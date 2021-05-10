import React , { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Container , 
  Button , 
  Capsule , 
  Dropdown , 
  Group , 
  Icon , 
  Input , 
  Link ,
  Logo ,
  Picture ,
  Profile ,
  Search ,
} from './styles/bar';
import logo from '../../logo.svg';
import * as ROUTES from '../../constants/routes';
import { browsePage, global } from '../../constants/ui-text';

export default function Bar({ children , ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Bar.Button = function BarButton({ to , children , ...rest }) {
  return (
    <Button href={to} {...rest}>
      {children}
    </Button>
  );
}

Bar.Capsule = function BarCapsule({ children , ...rest }) {
  return <Capsule {...rest} >{children}</Capsule>;
}

Bar.Dropdown = function BarDropdown({ children , ...rest }) {
  return <Dropdown {...rest} >{children}</Dropdown>;
}  

Bar.Group = function BarGroup({ children , ...rest }) {
  return <Group {...rest} >{children}</Group>;
}

Bar.Link = function BarLink({ children , ...rest }) {
  return <Link {...rest} >{children}</Link>;
}

Bar.Logo = function BarLogo({ to , ...rest }) {
  return (
    <ReactRouterLink to={ROUTES.HOME}  >
        <Logo alt={global.company} src={logo} {...rest} />
    </ReactRouterLink>
  );
}

Bar.Profile = function BarProfile({ children , ...rest }) {
  return <Profile {...rest} >{children}</Profile>;
}

Bar.Picture = function BarPicture({ children , src , ...rest }) {
  return <Picture src={src} >{children}</Picture>;
}

Bar.Search = function BarSearch({ src , children , ...rest }) {
  const [displayInput , setDisplayInput] = useState(false);
  const [term , setTerm] = useState('');

  return (
    <Search {...rest}>
      <Icon 
        onClick={() => setDisplayInput((displayInput) => !displayInput)}
      >
        <img 
        src={browsePage.searchIconURL} 
        alt={browsePage.searchIconAlt}
        />
      </Icon>
      <Input 
        onChange={({ target }) => setTerm(target.value)} 
        value={term} 
        placeholder={browsePage.searchPlaceholder} 
        active={displayInput} 
      />
    </Search>
  );
}