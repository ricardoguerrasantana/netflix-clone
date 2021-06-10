import Debug from "debug";
const log = Debug('App:FooterLinksContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import FooterLinks from './FooterLinks';
import { homePage } from '../../../constants/ui-text';
import { Link } from './styled-components';

function FooterLinksContainer() {
  log('Rendering...');

  const rows = homePage.footer.links.map((rows, i) => {
    const items = rows.map((item, k) => {
      const element = (
        <Link href="#">
          {item}
        </Link>
      );

      return {
        key: "item" + k,
        element
      }
    });

    return {
      key: "column" + i,
      items: items
    }
  });

  return (
    <FooterLinks
      copyRight={homePage.footer.copyRight}
      rows={rows}
      title={homePage.footer.title}
    />
  );
}

export default memo(FooterLinksContainer);