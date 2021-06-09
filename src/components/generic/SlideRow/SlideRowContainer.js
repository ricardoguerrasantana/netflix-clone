import Debug from "debug";
const log = Debug('App:SlideRowContainer');
log.log = console.log.bind(console);

import PropTypes from 'prop-types';
import React from 'react';
import SlideRow from "./SlideRow";

function SlideRowContainer({ items, extendedItem, title }) {
  log('Rendering...');

  return (
    <SlideRow
      extendedItem={extendedItem}
      items={items}
      title={title}
    />
  );
}

SlideRowContainer.propTypes = {
  extendedItem: PropTypes.element,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
}

SlideRowContainer.defaultProps = {
  extendedItem: null,
}


export default SlideRowContainer;