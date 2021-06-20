import Debug from "debug";
const log = Debug('App:HomeFeatureContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import { BasicFeature, OptEmail } from '../../../components';
import { Inner } from './styled-components';

function HomeFeatureContainer() {
  log('Rendering...');

  return (
    <BasicFeature>
      <Inner>
        <OptEmail />
      </Inner>
    </BasicFeature>
  );
}

export default memo(HomeFeatureContainer);