import Debug from "debug";
const log = Debug('App:ContentSlideRowContainer');
log.log = console.log.bind(console);

import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useCategory } from "../../../hooks";
import { Card, ExtendedContent, SlideRow } from '../../../containers'
import { capitalizeFirstEach } from "../../../utils";

function ContentSlideRowContainer({ setSelectedItem, content, title, selectedItem }) {
  log('Rendering...');

  const category = useCategory();
  const [displayExtended, setDisplayExtended] = useState(false);

  // Determines whether selected item belongs to this slide row and therefore displays the item in extended component. 
  useEffect(() => {
    if (selectedItem.genre) {

      const genre = capitalizeFirstEach(selectedItem.genre);
      if (genre === title) {
        setDisplayExtended(true);
      } else {
        setDisplayExtended(false);
      }

    }
  }, [selectedItem]);

  // Package of card components for rendering by SlideRow generic component
  const items = content.map((item) => {
    function handleCardClick() {
      setSelectedItem(item);
      setDisplayExtended(true);
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

  // If selected item belongs to this row ExtendedContent component may be sent to be displayed by SlideRow generic component.
  const extendedItem = displayExtended ?
    (
      <ExtendedContent
        item={selectedItem}
        setDisplayExtended={setDisplayExtended}
      />
    )
    : null;

  return (
    <SlideRow
      extendedItem={extendedItem}
      items={items}
      title={title}
    />
  );
}

ContentSlideRowContainer.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedItem: PropTypes.objectOf(PropTypes.any).isRequired,
  setSelectedItem: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

export default ContentSlideRowContainer;