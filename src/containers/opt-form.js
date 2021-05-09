import React from 'react';
import { OptForm } from '../components';
import { global, homePage } from '../constants/ui-text';

export default function OptFormContainer({ hText , hTitle , hSubTitle }) {
  return (
    <OptForm>
      <OptForm.Title hidden={hTitle} >
        {homePage.optFormTitle}
      </OptForm.Title>
      <OptForm.SubTitle hidden={hSubTitle} >
        {homePage.optFormSubTitle}
      </OptForm.SubTitle>
      <OptForm.Capsule>
        <OptForm.Input placeholder={global.emailPlaceholder} />
        <OptForm.Button>{homePage.optFormButton}</OptForm.Button>
      </OptForm.Capsule>
      <OptForm.Break />
      <OptForm.Text hidden={hText} >
        {homePage.optFormText}
      </OptForm.Text>
    </OptForm>
  );
}