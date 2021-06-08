import React from 'react';
import { OptForm } from '../components';
import { global, homePage } from '../constants/ui-text';

export default function OptFormContainer({ 
  hideText , 
  hideTitle , 
  hideSubTitle 
}) {
  return (
    <OptForm>
      <OptForm.Title hidden={hideTitle} >
        {homePage.optFormTitle}
      </OptForm.Title>
      <OptForm.SubTitle hidden={hideSubTitle} >
        {homePage.optFormSubTitle}
      </OptForm.SubTitle>
      <OptForm.Capsule>
        <OptForm.Input placeholder={global.emailPlaceholder} />
        <OptForm.Button>{homePage.optFormButton}</OptForm.Button>
      </OptForm.Capsule>
      <OptForm.Break />
      <OptForm.Text hidden={hideText} >
        {homePage.optFormText}
      </OptForm.Text>
    </OptForm>
  );
}