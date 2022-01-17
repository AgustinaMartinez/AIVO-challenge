import styled from 'styled-components';
import { colors } from '../../themes';

export const FooterContainerStyled = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  background-color: ${colors.violet.base};
`;

export const PStyled = styled.div`
  color: ${colors.white.base};

  @media (min-width: 1400px) {
    font-size: 1rem;
  }
`;
