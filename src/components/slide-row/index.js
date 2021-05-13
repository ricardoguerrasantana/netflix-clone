import React, { createContext, useContext, useState } from 'react';
import { global } from '../../constants/ui-text';
import { Player } from '../../components';
import {
  Container , 
  Card , 
  CloseIcon , 
  GenreTitle , 
  CardDetail , 
  CardHover ,  
  CardText , 
  CardTitle , 
  Focus , 
  FocusText , 
  FocusDetail , 
  FocusMaturity , 
  FocusTitle , 
  Item , 
  Image , 
  Inner , 
  MaturityGrade , 
  MaturityText , 
  MaturitySpan , 
  Section , 
  SubTitle, 
  FocusInfo, 
} from './styles/slide-row';

export const FocusContext = createContext();

export default function SlideRow({ slideRow , category , ...rest }) {
  const [showFocus , setShowFocus] = useState(false);
  const [itemFocus , setItemFocus] = useState({});

  return <FocusContext.Provider 
  value={{ 
    showFocus , 
    setShowFocus , 
    itemFocus , 
    setItemFocus , 
  }}
  >
    <Container {...rest}>
      <GenreTitle>{slideRow.title}</GenreTitle>
      <Inner>
        {slideRow.items.map(item => (
          <Card 
            key={item.id}
            onClick={() => {
              setItemFocus(itemFocus => item)
              setShowFocus(showFocus => true)
            }}
          >
            <Image 
              src={`/images/${category}/${slideRow.title.toLowerCase().trim().replace(/ /g , '-')}/${item.slug}/small.jpg`} 
            />
            <CardHover>
            </CardHover>
              <CardDetail>
                <CardTitle>{item.title}</CardTitle>
                <CardText>{item.description}</CardText>
              </CardDetail>
          </Card>
        ))}
      </Inner>
      <SlideRow.Focus category={category} />
    </Container>
  </FocusContext.Provider>;
}

SlideRow.Genre = function SlideRowGenre({ children , ...rest }) {
  return <GenreTitle {...rest}>{children}</GenreTitle>;
}

SlideRow.Detail = function SlideRowDetail({ children , ...rest }) {
  return <CardDetail {...rest}>{children}</CardDetail>;
}

SlideRow.Focus = function SlideRowFocus({ category , children , ...rest }) {
  const { 
    showFocus , 
    itemFocus , 
    setShowFocus 
  } = useContext(FocusContext);
  
  return showFocus ? (
    <Focus 
    src={`/images/${category}/${itemFocus.genre.toLowerCase().trim().replace(/ /g , '-')}/${itemFocus.title.toLowerCase().trim().replace(/ /g , '-')}/large.jpg`}
    >
      <FocusInfo>
        
        <FocusDetail>
          <FocusTitle>{itemFocus.title}</FocusTitle>
          <FocusText>{itemFocus.description}</FocusText>
          <CloseIcon 
            src={global.closeIconSrc} 
            onClick={() => setShowFocus(showFocus => false)} 
          />
        </FocusDetail>

        <FocusMaturity>
          <MaturityGrade rating={itemFocus.maturity}>
              {itemFocus.maturity < 12 ? 'PG' : itemFocus.maturity}
          </MaturityGrade>
          <MaturityText>
            {itemFocus.genre.charAt(0).toUpperCase() + itemFocus.genre.slice(1)}
          </MaturityText>
        </FocusMaturity>
        <Player />
      </FocusInfo>
    </Focus>
    ) : null;
}

SlideRow.Item = function SlideRowItem({ item , children , ...rest }) {
  const { setShowFocus , setItemFocus } = useContext(FocusContext);

  return <Item 
    onClick={() => {
      setItemFocus(itemFocus => item)
      setShowFocus(showFocus => true)
    }} 
    {...rest}
  >{children}</Item>;
}

SlideRow.Image = function SlideRowImage({ ...rest }) {
  return <Image {...rest} />;
}

SlideRow.Inner = function SlideRowInner({ children , ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
}

SlideRow.Text = function SlideRowText({ children , ...rest }) {
  return <CardText {...rest}>{children}</CardText>;
}

SlideRow.Title = function SlideRowTitle({ children , ...rest }) {
  return <CardTitle {...rest}>{children}</CardTitle>;
}

SlideRow.Section = function SlideRowSection({ children , ...rest }) {
  return <Section {...rest}>{children}</Section>;
}

SlideRow.SubTitle = function SlideRowSubTitle({ children , ...rest }) {
  return <SubTitle {...rest}>{children}</SubTitle>;
}