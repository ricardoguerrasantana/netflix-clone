import Debug from "debug";
const log = Debug('App:HomePageContainer');
log.log = console.log.bind(console);

import React , { memo } from 'react';
import {
  FooterLinks,
  HomeFeature,
  Jumbotron,
  FaqsAccordion
} from '../../components';

function HomePageContainer() {
  log('Rendering...');

  return (
    <>
      <HomeFeature />

      <Jumbotron />

      <FaqsAccordion />

      <FooterLinks />
    </>
  );
}

export default memo(HomePageContainer);