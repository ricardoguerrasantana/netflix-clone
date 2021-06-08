import React from "react";
import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break,
} from "../styles/FooterStyles";

export default function Footer({ uiText }) {
  return (
    <Container>
      <Footer.Title>{uiText.title}</Footer.Title>
      <Footer.Break></Footer.Break>
      <Footer.Row>
        {uiText.links.map((col, i) => {
          return (
            <Footer.Column key={i}>
              {col.map((row, i) => {
                return (
                  <Footer.Link href="#" key={i}>
                    {row}
                  </Footer.Link>
                );
              })}
            </Footer.Column>
          );
        })}
      </Footer.Row>
      <Footer.Break></Footer.Break>
      <Footer.Text>{uiText.copyRight}</Footer.Text>
    </Container>
  );
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Break = function FooterBreak({ children, ...restProps }) {
  return <Break {...restProps}>{children}</Break>;
};
