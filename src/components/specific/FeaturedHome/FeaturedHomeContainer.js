import Debug from "debug";
const log = Debug('App:FeaturedHomeContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import { FeaturedMain, OptHome } from "../../../containers";
import { Inner } from './styled-components';

function FeaturedHomeContainer() {
  log('Rendering...');

  const featured = (
    <Inner>
      <OptHome />
    </Inner>
  );

  return (
    <FeaturedMain featured={featured} />
  );
}

export default memo(FeaturedHomeContainer);