import Debug from "debug";
const log = Debug('App:OptEmailContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { OptForm } from '../../../components';
import { Title, SubTitle, Text } from './styled-components';
import { global, homePage } from "../../../constants/ui-text";
import { useOptFormEmail, useSetOptFormEmail } from "../../../hooks";
import { useHistory } from "react-router-dom";
import * as ROUTES from '../../../constants/routes';

function OptEmailContainer({ hideHeader, hideFooter }) {
  log('Rendering...');

  const setOptFormEmail = useSetOptFormEmail();
  const optFormEmail = useOptFormEmail();
  const history = useHistory();

  function handleEmailInputChange({ target }) {
    setOptFormEmail(target.value);
  }

  function handleSubmit() {
    history.push(ROUTES.SIGN_UP);
  }

  const header = hideHeader ? null :
    (
      <>
        <Title>
          {homePage.optFormTitle}
        </Title>

        <SubTitle>
          {homePage.optFormSubTitle}
        </SubTitle>

      </>
    );

  const footer = hideFooter ? null :
    (
      <Text>
        {homePage.optFormText}
      </Text>
    );

  return (
    <OptForm
      footer={footer}
      handleInputChange={handleEmailInputChange}
      handleSubmit={handleSubmit}
      header={header}
      inputPlaceholder={global.emailPlaceholder}
      inputType="email"
      inputValue={optFormEmail}
    />
  );
}

OptEmailContainer.propTypes = {
  hideFooter: PropTypes.bool,
  hideHeader: PropTypes.bool,
}

OptEmailContainer.defaultProps = {
  hideFooter: false,
  hideHeader: false,
}

export default memo(OptEmailContainer);