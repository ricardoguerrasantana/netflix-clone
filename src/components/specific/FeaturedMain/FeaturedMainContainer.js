import Debug from "debug";
const log = Debug('App:FeaturedMainContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { homePage } from "../../../constants/ui-text";
import { Feature, TopBar } from "../../../containers";

function FeaturedMainContainer({ featured }) {
  log('Rendering...');

  const elements = (
    <>
      <TopBar />

      {featured}
    </>
  );

  return (
    <Feature
      backgroundSrc={homePage.homeBg}
      elements={elements}
    />
  );
}

FeaturedMainContainer.propTypes = {
  featured: PropTypes.element.isRequired
}

export default memo(FeaturedMainContainer);