import styled from 'styled-components/macro';
import { homePage } from '../../../constants/ui-text';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), url(${({ src }) => (src ? src : homePage.homeBg)}) top center / cover
    no-repeat;

  @media (max-width: 900px) {
    ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
  }
`;