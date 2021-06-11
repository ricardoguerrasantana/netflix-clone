import Debug from "debug";
const log = Debug('App:FeaturedContentContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import { browsePage } from "../../../constants/ui-text";
import { Feature, FeaturedContentPlayer, TopBar } from "../../../containers";
import { Inner, CallOut, Text } from './styled-components';
import { useTerm } from "../../../hooks";

function FeaturedContentContainer() {
  log('Rendering...');

  const term = useTerm();

  const backgroundSrc = term !== "" ? null : browsePage.browseBg;

  const elements = (
    <>
      <TopBar />

      {
        term === "" ?
          <Inner>
            <CallOut>
              {browsePage.callOut}
            </CallOut>

            <Text>
              {browsePage.description}
            </Text>

            <FeaturedContentPlayer />
          </Inner>
          : null
      }
    </>
  );

  return (

    <Feature
      backgroundSrc={backgroundSrc}
      dontShowOnSmallViewPort
      elements={elements}
    />
  );
}

export default memo(FeaturedContentContainer);