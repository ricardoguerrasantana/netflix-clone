import Debug from "debug";
const log = Debug('App:ExtendedContentPlayerContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import { browsePage } from "../../../constants/ui-text";
import { Player } from "../../../containers";

function ExtendedContentPlayerContainer() {
  log('Rendering...');

  return (
    <Player 
      buttonStyles="extendedContentPlayer" 
      buttonText={browsePage.playButton} 
      videoId="ricflix-player" 
      videoSource="/videos/bunny.mp4" 
      videoType="video/mp4" 
    />
  );
}

export default memo(ExtendedContentPlayerContainer);