import styled from 'styled-components';
import { colors, typography } from '../../themes';

export const ButtonStyled = styled.button`
  padding: 5px 10px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.violet.base};
  font-weight: ${typography.weights.medium};
  border: 2px solid ${colors.violet.base};
  border-radius: 5px;
  background: ${colors.white.base};
  cursor: pointer;

  &:hover {
    border: 2px solid ${colors.violet.secondary};
    color: ${colors.violet.secondary};
    transition: .2s;
  }

  &:active {
    border: 2px solid ${colors.violet.base};
    color: ${colors.white.base};
    background: ${colors.violet.base};
    transition: .2s;

    > svg {
      stroke: ${colors.white.base};
    }
  }
`;
