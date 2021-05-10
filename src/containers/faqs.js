import React from 'react';
import { OptFormContainer } from '../containers';
import { Accordion } from '../components';
import faqsData from '../fixtures/faqs.json';
import { homePage } from '../constants/ui-text';

export default function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>{homePage.faqsTitle}</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>
      
      <OptFormContainer 
        hideTitle 
        hideSubTitle 
      />
    </Accordion>
  );
}