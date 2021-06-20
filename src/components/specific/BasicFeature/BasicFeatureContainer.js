import Debug from "debug";
const log = Debug('App:BasicFeatureContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { homePage } from "../../../constants/ui-text";
import { Feature, TopBar } from '../../../components';

function BasicFeatureContainer({ children }) {
  log('Rendering...');

  return (
    <Feature
      backgroundSrc={homePage.homeBg}
    >
      <>
        <TopBar />

        {children}
      </>
    </Feature>
  );
}

BasicFeatureContainer.propTypes = {
  children: PropTypes.element.isRequired
}

export default memo(BasicFeatureContainer);