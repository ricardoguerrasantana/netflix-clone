import Debug from "debug";
const log = Debug('App:SlideRowContainer');
log.log = console.log.bind(console);

import PropTypes from 'prop-types';
import React from 'react';
import SlideRow from "./SlideRow";
// import { global } from '../constants/ui-text';
// import { Player } from '.';
import { useCategory } from "../../../hooks";
import { Card } from '../../../containers'
import { ExtendedContent } from '../../../containers'

function SlideRowContainer({ setSelectedItem, items, title, selectedItem }) {
  log('Rendering...');

  const category = useCategory();

  const cards = items.map((item) => {
    function handleCardClick() {
      setSelectedItem(item);
      // setShowExtended(true);
    }

    const element = (
      <Card
        description={item.description}
        handleCardClick={handleCardClick}
        imageSrc={`/images/${category}/${title.toLowerCase().trim().replace(/ /g, '-')}/${item.slug}/small.jpg`}
        title={item.title}
      />
    );

    return {
      id: item.id,
      element
    }
  });

  const extendedItem = (
    <ExtendedContent
      item={selectedItem}
      slideRowTitle={title}
    />
  );

  return (
    <SlideRow
      extendedItem={extendedItem}
      items={cards}
      title={title}
    />
  );
}

SlideRowContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedItem: PropTypes.objectOf(PropTypes.any).isRequired,
  setSelectedItem: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

export default SlideRowContainer;