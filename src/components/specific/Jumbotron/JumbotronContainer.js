import Debug from "debug";
const log = Debug('App:JumbotronContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import Jumbotron from './Jumbotron';
import items from '../../../fixtures/jumbo.json';

function JumbotronContainer() {
  log('Rendering...');

  return (
    <Jumbotron items={items} />
  );
}

export default memo(JumbotronContainer);