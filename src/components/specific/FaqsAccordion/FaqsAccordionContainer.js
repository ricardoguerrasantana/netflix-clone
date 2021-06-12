import Debug from "debug";
const log = Debug('App:FaqsAccordionContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import FaqsAccordion from './FaqsAccordion';
import faqs from '../../../fixtures/faqs.json';
import { homePage } from '../../../constants/ui-text';

function FaqsAccordionContainer() {
  log('Rendering...');

  return (
    <FaqsAccordion
      faqs={faqs}
      title={homePage.faqs.faqsTitle}
    />
  );
}

export default memo(FaqsAccordionContainer);