import React, { createContext, useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { browsePage, global } from '../../constants/ui-text';
import {
  Container , 
  Button , 
  Close , 
  Inner ,  
  InnerFrame ,  
  Overlay , 
} from './styles/player';

export const PlayerContext = createContext();

export default function Player({ src , children , ...rest }) {
  const [showPlayer , setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer , setShowPlayer }}>
      <Container {...rest}>
        <Player.Button />
        <Player.Video src="/videos/bunny.mp4" />
      </Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ src , ...rest }) {
  const { showPlayer , setShowPlayer } = useContext(PlayerContext);

  return showPlayer ? ReactDOM.createPortal(
    <InnerFrame>
      <Overlay onClick={() => setShowPlayer(false)} />
      <Inner>
        <video id="ricflix-player" controls>
          <source src={src} type="video/mp4" />
        </video>
        <Close 
          src={global.closeIconSrc}
          onClick={() => setShowPlayer(false)} 
        />
      </Inner>
    </InnerFrame> , 
    document.body
  ) : null;
}

Player.Button = function PlayerButton({ children , ...rest }) {
  const { showPlayer , setShowPlayer } = useContext(PlayerContext);

  return (
    <Button onClick={() => setShowPlayer(showPlayer => !showPlayer)}>
      {browsePage.playerButton}
    </Button>
  );
}