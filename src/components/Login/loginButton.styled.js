import styled from 'styled-components';
import { colors, typography } from '../../themes';

export const LoginButtonStyled = styled.button`
  padding: 10px 0;
  color: ${colors.white.base};
  font-weight: ${typography.weights.medium};
  border: 1px solid ${colors.violet.base};
  border-radius: 5px;
  background: ${colors.violet.base};
  cursor: pointer;

  &:hover {
    background: ${colors.violet.secondary};
    transition: .2s;
  }

  @media (min-width: 1400px) {
    width: 30%;
  }
`;
