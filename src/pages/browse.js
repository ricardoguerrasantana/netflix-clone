import Debug from 'debug';
import React from 'react';
import { BrowseContainer } from '../containers';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';

const log = Debug('App:BrowsePage');
log.log = console.log.bind(console);

export default function Browse() {
  const data = {};
  Object.assign(data , useContent('series'));
  Object.assign(data , useContent('films'));
  log('data' , data);

  const slides = selectionFilter(data);
  log({ slides });

  return (
    <BrowseContainer slides={slides} />
  );
}