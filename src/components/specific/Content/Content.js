/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import { FooterContainer, TopBar } from '../../../containers';
import { SlideRow, Feature, Header } from '../..';
import { SlideRows } from './styled-components';
import { browsePage } from '../../../constants/ui-text';

function Content({ selectedItem, setSelectedItem, term, slideRows }) {
  return (
    <>
      <Header
        dontShowOnSmallViewPort
        src={browsePage.browseBg}
        term={term}
      >
        <TopBar />

        <Feature.Inner term={term}>
          <Feature.CallOut>
            {browsePage.callOut}
          </Feature.CallOut>

          <Feature.Text>
            {browsePage.description}
          </Feature.Text>

          <Feature.Button>
            {browsePage.playButton}
          </Feature.Button>
        </Feature.Inner>
      </Header>

      <SlideRows term={term} >
        {slideRows.map(slideRow => {
          return (
            <SlideRow
              items={slideRow.items}
              key={slideRow.title}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              title={slideRow.title}
            />
          );
        })}
      </SlideRows>

      <FooterContainer />
    </>
  );
}

Content.propTypes = {
}

Content.defaultProps = {
}

export default Content;