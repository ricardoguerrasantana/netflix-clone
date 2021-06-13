import Debug from "debug";
const log = Debug('App:OptEmailContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { OptForm } from "../..";
import { Title, SubTitle, Text } from './styled-components';
import { homePage } from "../../../constants/ui-text";

function OptEmailContainer({ hideHeader, hideFooter }) {
  log('Rendering...');

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
      header={header}
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