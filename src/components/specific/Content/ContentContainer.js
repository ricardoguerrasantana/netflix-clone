/* eslint-disable react/jsx-max-depth */
import Debug from "debug";
const log = Debug('App:ContentContainer');
log.log = console.log.bind(console);

import Fuse from 'fuse.js';
import React, { useEffect, useState } from 'react';
import { useContent, useTerm } from "../../../hooks";
import { groupByGenre } from "../../../utils";
import Content from './Content'


function ContentContainer() {
  log('Rendering...');

  const term = useTerm();
  const content = useContent();
  const [slideRows, setSlideRows] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});


  useEffect(() => {
    log('Content', content);
    setSlideRows(groupByGenre(content));
    log('slideRows', slideRows);
  }, [content]);

  useEffect(() => {

    const fuse = new Fuse(content, {
      keys: [
        'title',
        'genre',
      ]
    });

    const search = fuse.search(term).map(({ item }) => item);
    log('search', search);

    if (term.length > 1 && search.length > 0) {
      setSlideRows(groupByGenre(search));
    } else {
      setSlideRows(groupByGenre(content));
    }

  }, [term]);

  return (
    <Content
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}
      slideRows={slideRows}
      term={term}
    />
  );
}

export default ContentContainer;