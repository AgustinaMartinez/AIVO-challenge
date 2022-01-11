import styled from 'styled-components';
import { colors, typography } from '../../themes';

export const HeroContainerStyled = styled.div`
  font-family: ${typography.fonts.base};
  color: ${colors.violet.base};
`;

export const ImgHeroStyled = styled.img`
  width: 100%;
  height: 13rem;
  object-fit: cover;
`;
