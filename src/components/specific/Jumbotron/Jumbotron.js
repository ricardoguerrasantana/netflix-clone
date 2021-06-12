/* eslint-disable react/jsx-max-depth */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Item, Image, Pane, SubTitle, Title } from './styled-components';

function Jumbotron({ items }) {
  return (
    <div>
      {items.map(item => (
        <Container key={item.id} >
          <Item direction={item.direction} >
            <Pane>
              <Title>
                {item.title}
              </Title>

              <SubTitle>
                {item.subTitle}
              </SubTitle>
            </Pane>

            <Pane>
              <Image
                alt={item.alt}
                src={item.image}
              />
            </Pane>
          </Item>
        </Container>
      ))}
    </div>
  );
}

Jumbotron.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
}

export default Jumbotron;