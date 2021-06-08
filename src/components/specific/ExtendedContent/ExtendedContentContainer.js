import Debug from "debug";
const log = Debug('App:ExtendedContentContainer');
log.log = console.log.bind(console);

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Maturity, BigPlayer, Review, Extended } from '../../../containers';
import { useCategory } from '../../../hooks';
import { capitalizeFirstEach, toKebabCase } from "../../../utils";

function ExtendedContentContainer({ item, slideRowTitle }) {
  log('Rendering...');

  const category = useCategory();
  const [displayFromOutside, setDisplayFromOutside] = useState(false);

  useEffect(() => {
    if (item.genre) {

      const genre = capitalizeFirstEach(item.genre);
      if (genre === slideRowTitle) {
        setDisplayFromOutside(true);
      } else {
        setDisplayFromOutside(false);
      }

    }
  }, [item]);

  function getBackgroundSrc() {
    const categoryKC = toKebabCase(category);
    const genreKC = toKebabCase(item.genre);
    const titleKC = toKebabCase(item.title);
    return `/images/${categoryKC}/${genreKC}/${titleKC}/large.jpg`;
  }

  return (
    <Extended
      backgroundSrc={getBackgroundSrc()}
      displayFromOutside={displayFromOutside}
      elements={
        <>
          <Review
            description={item.description}
            title={item.title}
          />

          <Maturity
            genre={item.genre}
            maturity={item.maturity}
          />

          <BigPlayer />
        </>
      }
    />
  );
}

ExtendedContentContainer.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  slideRowTitle: PropTypes.string.isRequired,
}

export default memo(ExtendedContentContainer);