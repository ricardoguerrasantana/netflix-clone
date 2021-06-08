import React from 'react';
import { Footer } from '../components'
import { homePage } from '../constants/ui-text';

export default function FooterContainer() {
  return <Footer uiText={homePage.footer.uiText} />;
}