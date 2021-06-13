import Debug from "debug";
const log = Debug('App:FeaturedContentContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import { browsePage } from "../../../constants/ui-text";
import { Feature, FeaturedContentPlayer, TopBar } from "../..";
import { Inner, CallOut, Text } from './styled-components';
import { useTerm } from "../../../hooks";

function FeaturedContentContainer() {
  log('Rendering...');

  const term = useTerm();

  const backgroundSrc = term !== "" ? null : browsePage.browseBg;

  return (

    <Feature
      backgroundSrc={backgroundSrc}
      dontShowOnSmallViewPort
    >
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
    </Feature>
  );
}

export default memo(FeaturedContentContainer);