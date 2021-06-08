import React from 'react';
import {
  Background ,
} from '../styles/HeaderStyles';

export default function Header({ bg = true , children , term , src , dontShowOnSmallViewPort }) {
  return bg ? (
    <Background 
      term={term} 
      src={src} 
      dontShowOnSmallViewPort={dontShowOnSmallViewPort} 
    >
      {children}
    </Background>
  ) : children;
}