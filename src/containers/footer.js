import React from 'react';
import { Footer } from '../components'
import { homePage } from '../constants/ui-text';

export default function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>{homePage.footerTitle}</Footer.Title>
      <Footer.Break></Footer.Break>
      <Footer.Row>
      {
        homePage.links.map((col) => { return <Footer.Column>{
          col.map((row) => {return <Footer.Link href="#">{row}</Footer.Link>})
          }</Footer.Column> })
      }
      </Footer.Row>
      <Footer.Break></Footer.Break>
      <Footer.Text>{homePage.copyRight}</Footer.Text>
    </Footer>
  );
}