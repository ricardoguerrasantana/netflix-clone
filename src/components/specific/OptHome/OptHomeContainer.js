import Debug from "debug";
const log = Debug('App:OptHomeContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { OptForm } from "../../../containers";
import { Title, SubTitle, Text } from './styled-components';
import { homePage } from "../../../constants/ui-text";

function OptHomeContainer({ hideHeader, hideFooter }) {
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

OptHomeContainer.propTypes = {
  hideFooter: PropTypes.bool,
  hideHeader: PropTypes.bool,
}

OptHomeContainer.defaultProps = {
  hideFooter: false,
  hideHeader: false,
}

export default memo(OptHomeContainer);