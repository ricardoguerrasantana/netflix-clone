import Debug from "debug";
const log = Debug('App:DropdownInfoContainer');
log.log = console.log.bind(console);

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import DropdownInfo from './DropdownInfo';
import { homePage } from "../../../constants/ui-text";

function DropdownInfoContainer({ body, header }) {
  log('Rendering...');

  const [displayBody , setDisplayBody] = useState(false);

  function handleHeaderClick() {
    setDisplayBody(prev => !prev);
  }

  return (
    <DropdownInfo
      body={body} 
      closeAlt={homePage.faqs.closeAtl}
      closeImgSrc={homePage.faqs.closeImgSrc}
      displayBody={displayBody}
      handleHeaderClick={handleHeaderClick}
      header={header}
      openAtl={homePage.faqs.openAlt}
      openImgSrc={homePage.faqs.openImgSrc}
      setDisplayBody={setDisplayBody}
    />
  );
}

DropdownInfoContainer.propTypes = {
  body: PropTypes.string.isRequired,
  header: PropTypes.string,
}

DropdownInfoContainer.defaultProps = {
  header: ""
}

export default memo(DropdownInfoContainer);