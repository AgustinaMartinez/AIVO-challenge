import styled from 'styled-components';
import { colors, typography } from '../../themes';

export const LoginContainerStyled = styled.div`
  width: 100%;
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 3rem;

  @media (min-width: 1400px) {
    align-items: center;
  }
`;

export const SpanStyled = styled.span`
  color: ${colors.violet.base};
`;

export const PStyled = styled.p`
  margin-top: 1rem;
  font-family: ${typography.fonts.secondary};

  @media (min-width: 1400px) {
    text-align: center;
  }
`;
