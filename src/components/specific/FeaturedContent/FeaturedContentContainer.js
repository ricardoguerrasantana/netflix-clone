import Debug from "debug";
const log = Debug('App:FeaturedContentContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import { browsePage } from "../../../constants/ui-text";
import { Background , Feature, FeaturedContentPlayer, TopBar } from "../../../containers";
import { useTerm } from "../../../hooks";

function FeaturedContentContainer() {
  log('Rendering...');

  const term = useTerm();

  return (
    <Background
      backgroundSrc={
        term !== "" ? null : browsePage.browseBg
      }
      dontShowOnSmallViewPort
    >
      <>
        <TopBar />

        {
          term === "" ?
            <Feature
              action={<FeaturedContentPlayer />}
              callOut={browsePage.callOut}
              description={browsePage.description}
            />
            : null
        }
      </>
    </Background>
  );
}

export default memo(FeaturedContentContainer);