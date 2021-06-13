import Debug from "debug";
const log = Debug('App:FeaturedContentPayerContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import { buttons } from "../../../constants/ui-text";
import { Player } from "../..";

function FeaturedContentPayerContainer() {
  log('Rendering...');

  return (
    <Player 
      buttonStyles="featuredContentPlayer" 
      buttonText={buttons.featureContentButtonText} 
      videoId="ricflix-player" 
      videoSource="/videos/bunny.mp4" 
      videoType="video/mp4" 
    />
  );
}

export default memo(FeaturedContentPayerContainer);