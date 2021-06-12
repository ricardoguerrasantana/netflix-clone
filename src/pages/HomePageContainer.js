import Debug from "debug";
const log = Debug('App:HomePageContainer');
log.log = console.log.bind(console);

import React , { memo } from 'react';
import {
  FooterLinks,
  FeaturedHome,
  Jumbotron,
  FaqsAccordion
} from '../containers';

function HomePageContainer() {
  log('Rendering...');

  return (
    <>
      <FeaturedHome />

      <Jumbotron />

      <FaqsAccordion />

      <FooterLinks />
    </>
  );
}

export default memo(HomePageContainer);