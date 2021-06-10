import React from 'react';
import PropTypes from 'prop-types';
import { FooterLinks , ContentSlideRow, FeaturedContent } from '../../../containers';
import { SlideRows } from './styled-components';

function Content({ selectedItem, setSelectedItem, term, slideRows }) {
  return (
    <>
      <FeaturedContent />

      <SlideRows term={term} >
        {slideRows.map(slideRow => {
          return (
            <ContentSlideRow
              content={slideRow.items}
              key={slideRow.title}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              title={slideRow.title}
            />
          );
        })}
      </SlideRows>

      <FooterLinks />
    </>
  );
}

Content.propTypes = {
  selectedItem: PropTypes.objectOf(PropTypes.any).isRequired , 
  setSelectedItem: PropTypes.func.isRequired , 
  slideRows: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired , 
  term: PropTypes.string.isRequired , 
}

Content.defaultProps = {
}

export default Content;