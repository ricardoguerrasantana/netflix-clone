import Debug from "debug";
const log = Debug('App:ExtendedContentContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Maturity, ExtendedContentPlayer, Review, Extended } from '../../../components';
import { useCategory } from '../../../hooks';
import { toKebabCase } from "../../../utils";

function ExtendedContentContainer({ item, setDisplayExtended }) {
  log('Rendering...');

  const category = useCategory();

  function getBackgroundSrc() {
    const categoryKC = toKebabCase(category);
    const genreKC = toKebabCase(item.genre);
    const titleKC = toKebabCase(item.title);
    return `/images/${categoryKC}/${genreKC}/${titleKC}/large.jpg`;
  }

  return (
    <Extended
      backgroundSrc={getBackgroundSrc()}
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

          <ExtendedContentPlayer />
        </>
      }
      setDisplayExtended={setDisplayExtended}
    />
  );
}

ExtendedContentContainer.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  setDisplayExtended: PropTypes.func.isRequired,
}

export default memo(ExtendedContentContainer);